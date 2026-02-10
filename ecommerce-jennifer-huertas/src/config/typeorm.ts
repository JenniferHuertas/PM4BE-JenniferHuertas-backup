import {
  DB_DATABASE,
  DB_DROP,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_SYNC,
  DB_USERNAME,
} from './envs';
import { registerAs } from '@nestjs/config';

export const config = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: DB_SYNC,
  dropSchema: DB_DROP,
  logging: ['error'],
  entities: ['src/entities/**/*.ts'],
  subscribers: [],
};

export default registerAs('typeorm', () => config);


