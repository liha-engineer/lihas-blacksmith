import express from 'express';
import AccountRouter from './routes/account.router.js';
import CharactersRouter from './routes/characters.router.js';
import ItemsRouter from './routes/items.router.js';
import LogMiddleware from './middlewares/log.middleware.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(LogMiddleware);
app.use(express.json());
app.use(cookieParser());

app.use('/api', [AccountRouter, CharactersRouter, ItemsRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(+process.env.PORT, () => {
    console.log(+process.env.PORT, '포트로 서버가 열렸어요!');
  });