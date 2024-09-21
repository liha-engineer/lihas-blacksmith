import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import { gameDataClient } from '../utils/prisma/index.js';
import { Prisma } from '@prisma/client';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// 아이템 구매
router.post('/inventory/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;
  const { itemCode, count } = req.body;
  const { accountId } = req.user;

  // 인벤토리 주인인 캐릭터 찾기. 해당 어카운트의 캐릭터가 맞는지 검증
  const findCharacter = await userDataClient.characters.findFirst({
    where: {
      characterId: +characterId,
    },
    select: {
      accountId: true,
      characterId: true,
      money: true,
    },
  });

  if (!findCharacter) return res.status(404).json({ message: '캐릭터가 존재하지 않습니다.' });
  if (findCharacter.accountId !== accountId)
    return res.status(403).json({ message: '본인의 캐릭터가 아닙니다.' });

  // 웅상님이 여기 문제있다고 하심
  const findItem = await gameDataClient.items.findFirst({
    where: { itemCode: +itemCode },
  });
  if (!findItem) return res.status(404).json({ message: '아이템이 존재하지 않습니다' });
  if (count < 0) return res.status(400).json({ message: '정확한 수량을 입력해 주세요' });
  if (findCharacter.money < count * findItem.price)
    return res.status(400).json({ message: '소지금이 부족합니다' });

  const findInventory = await userDataClient.inventory.findFirst({
    where: {
      characterId: +characterId,
    },
  });

  // 인벤토리 찾았으니 그 속의 아이템을 탐색하자
  const inventoryItem = await userDataClient.inventoryItem.findFirst({
    where: {
      inventoryId: findInventory.inventoryId,
      itemCode: +itemCode,
    },
  });

  // 인벤토리에 찾는 아이템이 없거든 새로 만들어줘
  if (!inventoryItem) {
    const buyItem = await userDataClient.inventoryItem.create({
      data: {
        inventoryId: findInventory.inventoryId,
        itemCode: +itemCode,
        itemCount: count,
      },
    });
  } else {
    const buyItem = await userDataClient.inventoryItem.update({
      where: { inventoryItemId: +inventoryItem.inventoryItemId },
      data: {
        itemCount: inventoryItem.itemCount + count,
      },
    });
  }

  const changedCharacterInfo = await userDataClient.characters.update({
    where: { characterId: +characterId },
    data: {
      money: findCharacter.money - count * findItem.price,
    },
  });

  return res.status(200).json({
    message: `${findItem.itemName} 아이템 ${count}개 구매하였습니다.`,
    money: changedCharacterInfo.money,
  });
});

router.get('/inventory/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;

  const findCharacter = await userDataClient.characters.findUnique({
    where: { characterId: +characterId },
  });
  if (!findCharacter) return res.status(404).json({ message: '올바른 캐릭터가 아닙니다' });

  const findInventory = await userDataClient.inventory.findFirst({
    where: { characterId: +findCharacter.characterId },
  });
  if (!findInventory) return res.status(404).json({ message: '인벤토리가 잘못 된 것 같습니다' });

  const findInventoryItems = await userDataClient.inventoryItem.findMany({
    // where: { inventoryId: +findInventory.inventoryId },
    select: {
      inventoryItemId: true,
      itemCode: true,
      itemCount: true,
    },
  });

  const itemCodes = findInventoryItems.map((item) => item.itemCode);
  // 게임db에서 이름과 툴팁 찾기
  const findItemInfo = await gameDataClient.items.findMany({
    where: {
      itemCode: {
        in: itemCodes,
      },
    },
    select: {
      itemName: true,
      tooltip: true,
      type : true,
    },
  });

  return res.status(200).json({ findInventoryItems, findItemInfo });
});

// 호출시 자동 100원 충전
router.put('/characters/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;

  const findCharacter = await userDataClient.characters.findFirst({
    where: { characterId: +characterId },
  });
  if (!findCharacter) return res.status(404).json({ message: '올바른 캐릭터가 아닙니다' });
  if (req.body.price) return res.status(400).json({ message: '아이템 가격은 수정할 수 없습니다' });

  const changeMoney = await userDataClient.characters.update({
    where: { characterId: +characterId },
    data: {
      money: findCharacter.money + 100,
    },
  });

  return res.status(200).json({ message: '100원 충전!', money: changeMoney.money });
});

// 입력값만큼 충전
// router.put('/characters/:characterId', authMiddleware, async (req, res, next) => {
//     const { characterId } = req.params;
//     const { money } = req.body;
  
//     const findCharacter = await userDataClient.characters.findFirst({
//       where: { characterId: +characterId },
//     });
//     if (!findCharacter) return res.status(404).json({ message: '올바른 캐릭터가 아닙니다' });
//     if (req.body.price) return res.status(400).json({ message: '아이템 가격은 수정할 수 없습니다' });
  
//     const changeMoney = await userDataClient.characters.update({
//       where: { characterId: +characterId },
//       data: {
//         money: findCharacter.money + money,
//       },
//     });
  
//     return res.status(200).json({ message: '잔액 충전 성공!', money: changeMoney.money });
//   });

export default router;
