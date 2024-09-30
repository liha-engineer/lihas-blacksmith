import { userDataClient } from "../prisma/index.js";

const findCharacter = async (characterId) => {
    const character = await userDataClient.characters.findFirst({
        where: {
          characterId: +characterId,
        },
      });

      return character;
}
export default findCharacter;