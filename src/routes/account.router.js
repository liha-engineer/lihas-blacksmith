import express from 'express';
import { userDataClient } from '../utils/prisma/index.js';
import bcrypt from 'bcrypt'
import { Prisma } from '@prisma/client';
import authMiddleware from '../middlewares/auth.middleware.js';
import  textValidation  from '../utils/joi/texvalidation.schema.js';
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

const router = express.Router();

router.post('/sign-up', async (req, res, next) => {
    try {
        const accountValidation = await textValidation.account.validateAsync(req.body);
        const { id, name, password, passwordConfirm } = accountValidation;
    
        const isExistName = await userDataClient.account.findFirst({
            where: { id },
            });
            if (isExistName) 
                return res.status(409).json({message: "해당 유저가 이미 존재합니다. "});
            if (password !== passwordConfirm)
                return res.status(400).json({message: "패스워드가 확인과 일치하지 않습니다." })

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await userDataClient.account.create({
                data: {
                    id, 
                    name, 
                    password: hashedPassword
                }
            });
        return res.status(201).json({message : `${user.id}님, 회원 가입이 완료되었습니다.`})
    } catch(err) {
		next(err);
     }
});

router.post("/sign-in", async (req, res, next) => {
    const {id, password} = req.body;
    const user = await userDataClient.account.findFirst({
        where: { id }
    });

    if(!user)
        return res.status(401).json({message : "사용자가 존재하지 않습니다"});
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare)
        return res.status(401).json({message : "비밀번호가 일치하지 않습니다!"});

    // 로그인 성공시 JWT 발급이 필요

    const accessToken = jwt.sign(
        {accountId : user.accountId}, 
        process.env.ACESSTOKEN_KEY, 
        {expiresIn: '1d'}
    );

    return res.status(200)
    .header('authorization', `Bearer ${accessToken}`)
    .json({ message : "로그인에 성공하였습니다.", data : accessToken })
});

// 계정정보 조회
router.get('/account', authMiddleware, async(req, res, next) => {
    // req.user 안에 사용자 정보를 저장해놨기 때문에 가져올것
    const { accountId } = req.user;

    // 전달받은 정보에서 accountId 꺼내서 DB랑 같은지 살펴볼거임
    const user = await userDataClient.account.findFirst({
        where : { accountId : +accountId },
        select : {
            id : true,
            name : true,
            createdAt : true,
            characters : {
                select : {
                    characterName : true,
                }
            }

        }
    });
    if (!user) 
        return res.status(404).json({ message : "사용자가 존재하지 않습니다"}); 

    return res.status(200).json({ data : user })
});

export default router;