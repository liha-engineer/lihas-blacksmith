import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import { gameDataClient } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { Prisma } from '@prisma/client';
import findCharacter from '../utils/character/findcharacter.js';
import findInventoryItem from '../utils/item/findinventoryitem.js';
import findItemFromDB from '../utils/item/finditemfromDB.js';

const router = express.Router();

// 아이템 구매
router.post('/merchant/buyitem/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;
  const { itemId, count } = req.body;

  const item = await gameDataClient.items.findFirst({
    where: { itemId: +itemId },
  });
  if (!item) return res.status(404).json({ message: '존재하지 않는 아이템입니다.' });
  if (!count || count < 0) return res.status(400).json({ message: '올바른 갯수를 입력해주세요' });

  const character = await findCharacter(characterId);

  if (!character) return res.status(404).json({ message: '캐릭터가 존재하지 않습니다' });
  if (item.price * count > character.money)
    return res.status(400).json({ message: '소지금이 부족합니다.' });
  if (count > Number.MAX_SAFE_INTEGER)
    return res.status(400).json({ message: '입력 가능한 수를 초과하였습니다.' });

  const inventoryItem = await findInventoryItem(characterId, itemId);

  console.log('inventoryItem은:::: ' , inventoryItem)

  // inventoryItem[0] : 인벤토리 (큰 배낭), inventoryItem[1] : 인벤토리 각 아이템
  const merchantTransaction = await userDataClient.$transaction(
    async (tx) => {
      const changeBalance = await tx.characters.update({
        where: { characterId: +characterId },
        data: {
          money: character.money - item.price * count,
        },
      });

      if (!inventoryItem[1]) {
        await tx.inventoryItem.create({
          data: {
            inventoryId: inventoryItem[0].inventoryId,
            itemId: +itemId,
            itemCount: count,
          },
        });
      } else {
        await tx.inventoryItem.update({
          where: { inventoryItemId: +inventoryItem[1].inventoryItemId },
          data: {
            itemCount: inventoryItem[1].itemCount + count,
          },
        });
      }

      return changeBalance;
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
    },
  );
  return res
    .status(200)
    .json({ message: `${item.itemName} ${count}개 구매 완료. 잔액 ${merchantTransaction.money} 원` });
});

// 아이템 판매
// 1개면 삭제해주고 2개 이상이면 갯수 줄여줘야 함
router.put('/merchant/sellitem/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;
  const { itemId, count } = req.body;

  const character = await findCharacter(characterId);
  if (!character)
    return res.status(404).json({ message: '캐릭터가 존재하지 않거나 올바른 캐릭터가 아닙니다.' });

  // inventoryItem[0] = 인벤토리(큰 배낭) 정보, inventoryItem[1] = 인벤토리아이템
  const inventoryItem = await findInventoryItem(characterId, itemId);
  if (!inventoryItem[1]) return res.status(404).json({ message: '아이템이 존재하지 않습니다.' });
  if (inventoryItem[1].itemCount < count ) return res.status(400).json({ message : "보유한 아이템 갯수가 모자랍니다."})  

  //gameDB에서 아이템 정보 가져오기 (가격정보 얻기 위함)
  const itemInfo = await findItemFromDB(itemId);

  const sellingTransaction = await userDataClient.$transaction(
    async (tx) => {
      const changeBalance = await tx.characters.update({
        where: { characterId: +characterId },
        data: { money: character.money + (count * itemInfo.price) * 0.3 },
      });

      if (inventoryItem[1].itemCount > 1) {
        await tx.inventoryItem.update({
          where: { inventoryItemId: +inventoryItem[1].inventoryItemId },
          data: { itemCount: inventoryItem[1].itemCount - count },
        });
      } else {
        await tx.inventoryItem.delete({
          where: { 
            inventoryItemId: +inventoryItem[1].inventoryItemId,
            itemId : +itemId
           },
        });
      }

      return changeBalance;
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
    },
  );

  console.log('sellingTransaction', sellingTransaction);

  return res
    .status(200)
    .json({ message: `${item.itemName} ${count}개 판매 완료. 잔액 ${sellingTransaction.money} 원` });
});

// 호출시 자동 100원 충전
// router.put('/merchant/money/:characterId', authMiddleware, async (req, res, next) => {
//   const { characterId } = req.params;

//   const character = await findCharacter(characterId);
//   if (!character)
//     return res.status(404).json({ message: '캐릭터가 존재하지 않거나 올바른 캐릭터가 아닙니다.' });

//   console.log('character는: ', character)

//   const changeMoney = await userDataClient.characters.update({
//     where: { characterId: +characterId },
//     data: {
//       money: findCharacter.money + 100,
//     },
//   });

//   return res.status(200).json({ message: '100원 충전!', money: changeMoney.money });
// });

// 입력값만큼 돈 충전
router.put('/merchant/money/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;
  const { money } = req.body;

  const character = await findCharacter(characterId);
  if (!character)
    return res.status(404).json({ message: '캐릭터가 존재하지 않거나 올바른 캐릭터가 아닙니다.' });

  const changeMoney = await userDataClient.characters.update({
    where: { characterId: +characterId },
    data: {
      money: character.money + money,
    },
  });

  return res.status(200).json({ message: '잔액 충전 성공!', money: changeMoney.money });
});

export default router;
