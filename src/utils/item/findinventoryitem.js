import { userDataClient } from "../prisma/index.js";

const findInventoryItem = async (characterId, itemId) => {
    const inventory = await userDataClient.inventory.findFirst({
        where: {
          characterId: +characterId,
        },
        include: { inventoryitem: true },
      });
    
      // 인벤토리 찾아 속 아이템 탐색
      const inventoryItem = await userDataClient.inventoryItem.findFirst({
        where: {
          inventoryId: inventory.inventoryId,
          itemId: +itemId,
        },
      });

      return [inventory, inventoryItem];
}
export default findInventoryItem;