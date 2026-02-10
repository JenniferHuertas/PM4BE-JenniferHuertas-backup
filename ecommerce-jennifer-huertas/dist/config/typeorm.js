"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const envs_1 = require("./envs");
const config_1 = require("@nestjs/config");
exports.config = {
    type: 'postgres',
    host: envs_1.DB_HOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_DATABASE,
    synchronize: envs_1.DB_SYNC,
    dropSchema: envs_1.DB_DROP,
    logging: ['error'],
    entities: ['src/entities/**/*.ts'],
    subscribers: [],
};
exports.default = (0, config_1.registerAs)('typeorm', () => exports.config);
//# sourceMappingURL=typeorm.js.map