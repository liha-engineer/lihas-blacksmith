import express from 'express'
import { prisma } from "../utils/prisma/index.js";
import { Prisma } from "@prisma/client";
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// 아이템 생성 api
router.post('/items', async (req, res, next) => {
    const { itemName, itemCode, itemStat, price, count, type, tooltip } = req.body;

    const isExistItem = await prisma.items.findFirst({
        where: {itemName}
    })
    if (isExistItem)
        return res.status(409).json({message : "해당 아이템이 이미 존재합니다"});
    if (!itemCode)
        return res.status(400).json({message : "아이템코드를 입력해주세요"})
    if(!price)
        return res.status(400).json({message : "가격을 입력해주세요"})
    if(!type)
        return res.status(400).json({message : "아이템 타입을 입력해주세요"})
    
    const registeredItem = await prisma.items.create ({
        data : {
            itemName,
            itemCode,
            itemStat : { 
                "atk" : itemStat.atk, 
                "hp" : itemStat.hp },
            price,
            count,
            type,
            tooltip
        }
    });

    return res.status(201).json({message : "아이템이 등록되었습니다.", item : registeredItem})
})

// 아이템 스탯 수정
router.put('/items/:itemId', async (req, res, next) => {
    const { itemId }  = req.params;
    const { itemName, itemStat, tooltip } = req.body;

    const isCorrectItem = await prisma.items.findFirst({
        where : {itemId : +itemId}
    })
    if(!isCorrectItem)
        return res.status(404).json({message : "아이템이 존재하지 않습니다"})

    if (itemName !== isCorrectItem.itemName)
        return res.status(409).json({message : "수정 대상 아이템이 아닙니다"})

    if(req.body.price)
        return res.status(400).json({message : "아이템 가격은 수정할 수 없습니다"})

    const itemInfo = await prisma.items.update({
        where : { itemId : +itemId }, 
        data : {
            itemName,
            itemStat :  {
                "atk" : itemStat.atk,
                "hp" : itemStat.hp,
            },
            tooltip : tooltip || isCorrectItem.tooltip,
        }, 
    });

    return res.status(200).json({message : "아이템 정보가 변경되었습니다", data : itemInfo})

});

// 아이템 전체조회
router.get('/items', async(req, res, next) => {
    const itemList = await prisma.items.findMany({
        select : {
            itemCode : true,
            itemName : true,
            price : true,
            tooltip : true,
        }
    });
    return res.status(200).json({message : "아이템 전체 목록 일람", data : itemList});
});

// 아이템 상세조회
router.get('/items/:itemId', async (req, res, next) => {
    const { itemId } = req.params;
    const itemInfo = await prisma.items.findFirst({
        where : {itemId : +itemId},
        select : {
            itemId : true,
            itemName : true,
            itemStat : true,
            price : true,
            tooltip : true,
        }

    });
    return res.status(200).json({message : "아이템 상세조회 완료", data : itemInfo})
})

// 아이템 구매
router.post('/userItems/:characterId', authMiddleware, async (req, res, next) => {
    const {characterId} = req.params;
    const {itemCode, count} = req.body;

    const character = await prisma.characters.findUnique({
        where : { characterId }
    });
    if (!character)
        return req.status(403).json({message : "너... 뭐냐... 어케 들어온거냐..."})

    const item = await prisma.items.findFirst({
        where : { itemCode },
    });
    if(!item)
        return res.status(404).json({ message : "아이템이 존재하지 않습니다"});
    if(count < 0)
        return res.status(400).json({message : "정확한 수량을 입력해 주세요"});
    if(character.money < item.price)
        return res.status(400).json({message : "소지금이 부족합니다"})

    const buyItem = await prisma.userItems.upsert({
        data: {
            itemCode,
            itemName,
            itemCount : item.itemCount + 1,
        }
    })

    const changedCharacterInfo = await prisma.characters.upsert({
        where : { characterId },
        data : {
            money : character.money - item.price
        }
    })

    return res.status(200).json({message : `${buyItem.itemName} 아이템 ${buyItem.itemCount}개 구매하였습니다.`, data : changedCharacterInfo.money})
})


export default router;