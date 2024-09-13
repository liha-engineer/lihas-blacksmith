
import express from 'express'
import { prisma } from "../utils/prisma/index.js";
import { Prisma } from "@prisma/client";
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// 아이템 구매
router.post('/userItems/:characterId', authMiddleware, async (req, res, next) => {
    const { characterId } = req.params;
    const {itemCode, count} = req.body;
    const { accountId } = req.user;

    // 캐릭터 찾는 것
    const findCharacter = await prisma.characters.findUnique({
        where : { characterId : +characterId }
    });
    // 웅상님 -> 다른 캐릭터로 접속해도 여기 다 들어갈 수 있을 것?!
    // req.user 에서 유저 아이디 받아와서 지금 검색한 캐릭터가 가진 유저아이디가 내꺼인지 검증할것 

    if (!findCharacter)
        return res.status(403).json({message : "너... 뭐냐... 어케 들어온거냐..."})
    if (accountId !== findCharacter.accountId)
        return res.status(403).json({message : "본인의 캐릭터가 아닙니다."})

    // 웅상님 여기 문제있다고 하심
    const item = await prisma.items.findFirst({
        where : { itemCode : +itemCode },
    });
    if(!item)
        return res.status(404).json({ message : "아이템이 존재하지 않습니다"});
    if(count < 0)
        return res.status(400).json({message : "정확한 수량을 입력해 주세요"});
    if(findCharacter.money < req.body.count * item.price)
        return res.status(400).json({message : "소지금이 부족합니다"})

    // 수빈님 여기 문제있다고 하심
    // 나는 뭘찾고 싶은걸까? -> 내 인벤토리 속에 구매하려는 아이템이 있는지 알고싶다
    // 그래서 일단 내 캐릭터의 인벤토리를 캐릭터ID로 가져오고,
    // 그 인벤토리 속에 아이템코드에 해당하는 아이템이 있는지 찾아보고 싶은것
    const inventory = await prisma.userItems.findFirst({
        where : { 
            characterId : +findCharacter.characterId,
            itemCode : +itemCode,
         }
    })
    // 인벤토리 정보 가져와줘 -> 캐릭터가 내 캐릭터 인것만. 
    // 그러면 findFirst니까 인벤토리 중 제일 꼭대기 아이템 한개만 픽될것
    // 이 where절에는 itemId까지 넣어줘야 한다

    if(!inventory)
    {
        const buyItem = await prisma.userItems.create({
            data: {
                characterId : findCharacter.characterId,
                itemId : +item.itemId,
                itemCount : req.body.count,
                itemCode : +itemCode,
                itemName : item.itemName,
                itemStat : item.itemStat,
            }
        })
    } 
    // else {

    // 인벤토리에 없으면 만들어주고
    // 있거든 거기에 추가해줘 를 만들고 싶었는데

        await prisma.userItems.upsert({
            where : { userItemsId : +inventory.userItemsId },
            create: {
                characterId : findCharacter.characterId,
                itemId : +item.itemId,
                itemCount : req.body.count,
                itemCode : +itemCode,
                itemName : item.itemName,
                itemStat : item.itemStat,
            },

            update: {
                characterId : findCharacter.characterId,
                itemId : +item.itemId,
                itemCount : inventory.itemCount + req.body.count,
                itemCode : +itemCode,
                itemName : item.itemName,
                itemStat : item.itemStat,
            }
    })

    const changedCharacterInfo = await prisma.characters.update({
        where : { characterId: +characterId },
        data : {
            money : findCharacter.money - (req.body.count * item.price)
        }
    })

    return res.status(200).json({message : `${item.itemName} 아이템 ${req.body.count}개 구매하였습니다.`, money : changedCharacterInfo.money})
})


// 돈복사 메서드
router.put('/characters/:characterId', authMiddleware, async (req, res, next) => {
    const { characterId }  = req.params;
    const { money } = req.body;

    const findCharacter = await prisma.characters.findFirst({
        where : { characterId : +characterId }
    })
    if(!findCharacter)
        return res.status(404).json({message : "올바른 캐릭터가 아닙니다"})
    if(req.body.price)
        return res.status(400).json({message : "아이템 가격은 수정할 수 없습니다"})

    const changeMoney = await prisma.characters.update({
        where : { characterId : +characterId }, 
        data : {
            money : findCharacter.money + money
        }, 
    });

    return res.status(200).json({message : "잔액 충전 성공!", money : changeMoney.money})

})


export default router;
