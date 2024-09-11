
const headerCheck = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        // 이 미들웨어를 통해 헤더가 존재하지 않으면 (로그인 안했거나 토큰 날아갔으면)
        // 다음 라우터로 보내버리는 것
        if (!authHeader)
            next('route');
        // 토큰 멀쩡히 있으면 그냥 이 핸들러의 다음 경로 실행해줘
        else next();
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

export default headerCheck;