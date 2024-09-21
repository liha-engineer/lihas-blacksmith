import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import authMiddleWare from '../middlewares/auth.middleware.js';
import headerCheckMiddleWare from '../middlewares/header-check.middleware.js';
import { Prisma } from '@prisma/client';

const router = express.Router();

// 캐릭터 생성하려는 사용자가 인증된 사용자인지 검사
// 캐릭터 생성을 위해 캐릭터명을 body로 전달할것
// Characters 테이블에 캐릭터를 생성
// 이거 transaction 걸어서 오류났을때 캐릭터 슬롯만 차지하는 일 없어야 할듯
router.post('/characters', authMiddleWare, async (req, res, next) => {
  try {
    const { characterName } = req.body;
    const { accountId } = req.user;

    const duplicateName = await userDataClient.characters.findFirst({
      where: { characterName },
    });
    if (duplicateName)
      return res.status(409).json({ message: '해당 이름의 캐릭터가 이미 존재합니다' });

    const result = await userDataClient.$transaction(
      async (tx) => {
        const character = await tx.characters.create({
          data: {
            accountId: +accountId,
            characterName: characterName,
          },
        });

        const inventory = await tx.inventory.create({
          data: {
            characterId: +character.characterId,
          },
        });

        return [character, inventory];
      },

      {
        isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
      },
    );

    return res.status(201).json({ message: '캐릭터 생성 완료!', result: result[0] });
  } catch (err) {
    next(err);
  }
});

// 캐릭터 전체목록 조회
router.get('/characters', authMiddleWare, async (req, res, next) => {
  const { accountId } = req.user;

  const characters = await userDataClient.characters.findMany({
    where: { accountId: +accountId },
    select: {
      accountId: true,
      id: true,
      characterId: true,
      characterName: true,
    },
  });

  return res.status(200).json({ message: '캐릭터 조회결과', data: characters });
});

// 캐릭터 상세조회 - 비로그인이거나 해당유저가 아닌 경우 money 및 상세정보 미출력하도록
router.get(
  '/characters/:characterId',
  headerCheckMiddleWare,
  authMiddleWare,
  async (req, res, next) => {
    const { characterId } = req.params;
    const { accountId } = req.user;

    // 지금 로그인해있는 유저랑 이 캐릭터의 유저랑 같은지 찾는것.
    const isSameUser = await userDataClient.characters.findUnique({
      where: { characterId: +characterId },
    });

    if (!isSameUser) return res.status(404).json({ message: '캐릭터가 존재하지 않습니다.' });

    let characters = await userDataClient.characters.findUnique({
      where: { characterId: +characterId },
      select: {
        characterId: true,
        accountId: true,
        characterName: true,
        hp: true,
        atk: true,
        money: true,
        createdAt: true,
      },
    });

    // hp랑 atk만 보여주게 설정
    if (accountId !== isSameUser.accountId) {
      characters = await userDataClient.characters.findUnique({
        where: { characterId: +characterId },
        select: {
          characterName: true,
          hp: true,
          atk: true,
        },
      });
    }

    return res.status(200).json({ data: characters });
  },
);

// 이 라우터는 상단의 headerCheckMiddleWare에 의해 헤더가 비어있으면(토큰 없으면) 여기로 건너뛰게 설정
// 얘는 특별한 때만 돌아가는 녀석이다
router.get('/characters/search', async (req, res, next) => {
  const { characterName } = req.body;
  const characters = await userDataClient.characters.findFirst({
    where: { characterName },
    select: {
      characterName: true,
      hp: true,
      atk: true,
    },
  });
  return res.status(200).json({ data: characters });
});

router.delete('/characters/:characterId', authMiddleWare, async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const { accountId } = req.user;
    if (!accountId)
      return res.status(401).json({ message: '계정 정보가 존재하지 않거나 비정상적 접근입니다.' });

    const character = await userDataClient.characters.findFirst({
      where: { characterId: +characterId },
      select: {
        characterId: true,
        characterName: true,
        createdAt: true,
      },
    });

    if (!character) return res.status(404).json({ message: '캐릭터가 존재하지 않습니다' });

    const deleteCharacter = await userDataClient.characters.delete({
      where: { characterId: +characterId },
    });

    return res.status(200).json({ message: `${character.characterName} 캐릭터가 삭제되었습니다.` });
  } catch (err) {
    next(err);
  }
});

export default router;
