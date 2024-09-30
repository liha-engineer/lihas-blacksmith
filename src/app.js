import express from 'express';
import cookieParser from 'cookie-parser';
import accountRouter from './routes/accounts.router.js';
import charactersRouter from './routes/characters.router.js';
import itemsRouter from './routes/items.router.js';
import inventoryRouter from './routes/inventory.router.js';
import merchantRouter from './routes/merchant.router.js';
import equipmentsRouter from './routes/equipments.router.js';
import LogMiddleware from './middlewares/log.middleware.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';

import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(LogMiddleware);
app.use(express.json());
app.use(cookieParser());

app.use('/api', [accountRouter, charactersRouter, itemsRouter, inventoryRouter, merchantRouter, equipmentsRouter]);
app.use(ErrorHandlingMiddleware);

app.listen(+process.env.PORT, () => {
    console.log(+process.env.PORT, '포트로 서버가 열렸어요!');
  });