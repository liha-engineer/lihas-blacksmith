
import express from 'express'
import { prisma } from "../utils/prisma/index.js";
import { Prisma } from "@prisma/client";
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router;

// 아이템 구매
router.post('/userItems/:characterId', authMiddleware, async (req, res, next) => {
    const {characterId} = req.params;
    const {itemCode, count} = req.body;
    const { accountId } = req.user;

    // 캐릭터 찾는 것
    const findCharacter = await prisma.characters.findUnique({
        where : { characterId : +characterId }
    });
    // 웅상님 -> 다른 캐릭터로 접속해도 여기 다 들어갈 수 있을 것?!
    // req.user 에서 유저 아이디 받아와서 지금 검색한 캐릭터가 가진 유저아이디가 내꺼인지 검증할것 

    if (!findCharacter)
        return req.status(403).json({message : "너... 뭐냐... 어케 들어온거냐..."})
    if (accountId !== findCharacter.accountId)
        return req.status(403).json({message : "본인의 캐릭터가 아닙니다."})

    // 웅상님 여기
    const item = await prisma.items.findFirst({
        where : { itemCode : +itemCode },
    });
    if(!item)
        return res.status(404).json({ message : "아이템이 존재하지 않습니다"});
    if(count < 0)
        return res.status(400).json({message : "정확한 수량을 입력해 주세요"});
    if(findCharacter.money < item.price)
        return res.status(400).json({message : "소지금이 부족합니다"})

    // 수빈님 여기
    const userItems = await prisma.userItems.findFirst({
        where : { characterId : +findCharacter.characterId }
    })

    if(!userItems)
    {
        let buyItem = await prisma.userItems.create({
            data: {
                characterId : findCharacter.characterId,
                itemId : +item.itemId,
                itemCount : item.itemCount + req.body.count
            }
        })
    } else {
        const buyItem = await prisma.userItems.upsert({
            where : {userItemsId : +userItems.userItemsId },
            data: {
                itemCode,
                itemCount : item.itemCount + req.body.count
            }
    })
    }

    const changedCharacterInfo = await prisma.characters.upsert({
        where : { characterId },
        data : {
            money : findCharacter.money - (req.body.count * item.price)
        }
    })

    return res.status(200).json({message : `${item.itemName} 아이템 ${buyItem.itemCount}개 구매하였습니다.`, data : changedCharacterInfo.money})
})

export default router;
