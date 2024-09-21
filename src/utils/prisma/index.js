import { PrismaClient as GameDataClient } from '../../../prisma/gamedb/generated/gameDataClient/index.js';
import { PrismaClient as UserDataClient } from '../../../prisma/userdb/generated/userDataClient/index.js';

export const gameDataClient = new GameDataClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
}); 

export const userDataClient = new UserDataClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'pretty',
}); 
