import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import { gameDataClient } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { Prisma } from '@prisma/client';
import findCharacter from '../utils/character/findcharacter.js';
import findInventoryItem from '../utils/item/findinventoryitem.js';
import findItemFromDB from '../utils/item/finditemfromDB.js';

const router = express.Router();

// 장착한 아이템 조회

router.get('/equipment/:characterId', async (req, res, next) => {
  const { characterId } = req.params;

  const character = await findCharacter(characterId);
  if (!character)
    return res.status(404).json({ message: '캐릭터가 존재하지 않거나 올바른 캐릭터가 아닙니다.' });

  const equippedItem = await userDataClient.equippedItem.findMany({
    where: { characterId: +characterId },
    select: {
      itemId: true,
      equippedItemName: true,
    },
  });

  return res.status(200).json({ message: '장착 장비 조회', data: equippedItem });
});

// 장비 장착
router.post('/equipment/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;
  const { itemId } = req.body;

  const character = await findCharacter(characterId);
  if (!character)
    return res.status(404).json({ message: '캐릭터가 존재하지 않거나 올바른 캐릭터가 아닙니다.' });

  // 배열로 나옴 [0] : 인벤토리(큰 배낭), [1] : 인벤토리 아이템
  const inventoryItem = await findInventoryItem(characterId, itemId);
  if (!inventoryItem)
    return res.status(404).json({ message: '인벤토리에 해당 아이템이 존재하지 않습니다.' });

  const itemInfo = await findItemFromDB(itemId);
  if (!itemInfo) return res.status(404).json({ message: '존재하지 않는 아이템입니다.' });

  const equippedItem = await userDataClient.equippedItem.findFirst({
    where: { itemId: +itemId },
  });
  if (equippedItem) {
    const equippeItemType = await findItemFromDB(equippedItem.itemId);
    return res.status(409).json({ message: `${equippeItemType.type} 파츠의 장비를 이미 장착 중입니다.` });
  }

  const equipTransaction = await userDataClient.$transaction(
    async (tx) => {
      await tx.inventoryItem.update({
        where: { inventoryItemId: +inventoryItem[1].inventoryItemId },
        data: {
          itemCount: inventoryItem[1].itemCount - 1,
        },
      });

      const equipment = await tx.equippedItem.create({
        data: {
          characterId: +characterId,
          equippedItemName: itemInfo.itemName,
          itemId: +itemId,
        },
      });

      return equipment;
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted,
    },
  );

  return res
    .status(200)
    .json({ message: `${itemInfo.type} 파츠 ${equipTransaction.equippedItemName} 아이템 장착 완료` });
});

// 장비 탈착
router.put('/equipment/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;
  const { itemId } = req.body;

  const character = await findCharacter(characterId);
  if (!character)
    return res.status(404).json({ message: '캐릭터가 존재하지 않거나 올바른 캐릭터가 아닙니다.' });

  const itemInfo = await findItemFromDB(itemId);
  const equippedItem = await userDataClient.equippedItem.findFirst({
    where: { itemId: +itemId },
  });
    if (!equippedItem) {
    return res.status(404).json({ message: `${itemInfo.type} 파츠에 장비가 없습니다.` });
  }

  const inventory = await userDataClient.inventory.findFirst({
    where : { characterId : +characterId }
  })
  const inventoryItem = await findInventoryItem(characterId, itemId);

  const unequipTransction = userDataClient.$transaction(async (tx) => {
    const unequipItem = await tx.equippedItem.delete({
        where : { itemId : +itemId }
      });
      if (!inventoryItem) {
        await tx.inventoryItem.create({
            data : {
                inventoryId : +inventory.inventoryId,
                itemId : +itemId,
                itemCount : 1
            }
        });
      } else {
        await tx.inventoryItem.update({
            where : { itemId : +itemId },
            data : {
                itemCount : inventoryItem[1].itemCount + 1
            }
        });
      }

      return unequipItem;
  }, {
    isolationLevel : Prisma.TransactionIsolationLevel.ReadCommitted
  }
);

return res.status(200).json({ message : `${equippedItem.equippedItemName} 아이템 탈착 완료`});
});

export default router;
