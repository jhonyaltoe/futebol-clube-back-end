"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || '123456',
    database: process.env.POSTGRES_DATABASE || 'TRYBE_FUTEBOL_CLUBE',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3002,
    dialect: 'postgres',
    dialectOptions: {
        timezone: 'Z',
        ssl: true,
    },
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map