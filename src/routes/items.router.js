import express from 'express'
import { prisma } from "../utils/prisma/index.js";
import { Prisma } from "@prisma/client";
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// 아이템 생성 api
router.post('/items', async (req, res, next) => {
    const { item_name, item_code, item_stat, price, count, type, tooltip } = req.body;

    const isExistItem = await prisma.items.findFirst({
        where: {item_name}
    })
    if (isExistItem)
        return res.status(409).json({message : "해당 아이템이 이미 존재합니다"});
    if (!item_code)
        return res.status(400).json({message : "아이템코드를 입력해주세요"})
    if(!price)
        return res.status(400).json({message : "가격을 입력해주세요"})
    if(!type)
        return res.status(400).json({message : "아이템 타입을 입력해주세요"})
    
    const registeredItem = await prisma.items.create ({
        data : {
            item_name,
            item_code,
            item_stat : { 
                "atk" : item_stat.atk, 
                "hp" : item_stat.hp },
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
    const { item_name, item_stat, tooltip } = req.body;

    const isCorrectItem = await prisma.items.findFirst({
        where : {itemId : +itemId}
    })
    if(!isCorrectItem)
        return res.status(404).json({message : "아이템이 존재하지 않습니다"})

    if (item_name !== isCorrectItem.item_name)
        return res.status(409).json({message : "수정 대상 아이템이 아닙니다"})

    if(req.body.price)
        return res.status(400).json({message : "아이템 가격은 수정할 수 없습니다"})

    const itemInfo = await prisma.items.update({
        where : { itemId : +itemId }, 
        data : {
            item_name,
            item_stat :  {
                "atk" : item_stat.atk,
                "hp" : item_stat.hp,
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
            item_code : true,
            item_name : true,
            price : true,
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
            item_name : true,
            item_stat : true,
            price : true,
        }

    });
    return res.status(200).json({message : "아이템 상세조회 완료", data : itemInfo})
})

// router.post('/userItems', authMiddleware, (req, res, next) => {
//     const {item_code, count} = req.body;
//     const {characterId} = 
// })


export default router;