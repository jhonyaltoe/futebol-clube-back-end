import 'dotenv/config';
import { Options, Dialect } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3002,
  dialect: process.env.DB_DIALECT as Dialect || 'mysql',
  dialectOptions: {
    timezone: 'Z',
    ssl: process.env.DB_SSL === 'true' || false,
  },
  logging: false,
}

module.exports = config;
