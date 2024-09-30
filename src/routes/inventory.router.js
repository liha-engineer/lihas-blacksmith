import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import { gameDataClient } from '../utils/prisma/index.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import findCharacter from '../utils/character/findcharacter.js';

const router = express.Router();

// 인벤토리 조회
router.get('/inventory/:characterId', authMiddleware, async (req, res, next) => {
  const { characterId } = req.params;

  const character = await findCharacter(characterId)
  if (!character) return res.status(404).json({ message: '올바른 캐릭터가 아닙니다' });

  const inventory = await userDataClient.inventory.findFirst({
    where: { characterId: +characterId },
  });

  const inventoryItems = await userDataClient.inventoryItem.findMany({
    where: { inventoryId: +inventory.inventoryId },
    select: {
      inventoryItemId: true,
      itemId: true,
      itemCount: true,
    },
  });

  // 게임 DB에서 이름과 툴팁 찾기 위해 itemId만 모으는 작업
  const itemIds = inventoryItems.map((item) => item.itemId);
  // 게임db에서 이름과 툴팁 찾기
  const itemInfo = await gameDataClient.items.findMany({
    where: {
      itemId: {
        in: itemIds,
      },
    },
    select: {
      itemName: true,
      type: true,
      tooltip: true,
    },
  });

  return res.status(200).json({ inventoryItems, itemInfo });
});

export default router;
