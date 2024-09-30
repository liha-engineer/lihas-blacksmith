import { gameDataClient } from "../prisma/index.js";

const findItemFromDB = async (itemId) => {
    const item = await gameDataClient.items.findFirst({
        where : { itemId : +itemId }
      })
      return item;
}

export default findItemFromDB;
