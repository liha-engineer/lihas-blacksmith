import jwt from 'jsonwebtoken';
import { userDataClient } from '../utils/prisma/index.js';
import dotenv from 'dotenv';

dotenv.config();

// 이 미들웨어는 express에 의존성이 없어 그냥 export default async function 해도 상관은 없다
const loginAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader)
      return res.status(401).json({message : '토큰이 존재하지 않습니다.'})

    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.ACESSTOKEN_KEY);
    if (!decodedToken)
      return res.status(401).json({message : '유효하지 않은 토큰입니다.'})

    // 토큰만들때 accountId 저장하게 해서 만들었으므로, 검증완료된 토큰에서 꺼내 쓸것
    const accountId = decodedToken.accountId;
    const user = await userDataClient.account.findFirst ({
        where : { accountId : +accountId }, 
    }); 
    if (!user)
      return res.status(401).json({message : '토큰 사용자가 존재하지 않습니다.'})

    // req.user에 조회된 사용자 정보를 할당
    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError')
      return res.status(401).json({message : '토큰이 만료 되었습니다.'})
    if (err.name === 'JsonWebTokenError')
        return res.status(401).json({message : '토큰이 손상 되었습니다.'})

    return res.status(400).json({ message: err.message });
  }
};

export default loginAuth;
