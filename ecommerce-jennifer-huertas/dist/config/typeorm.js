"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = exports.config = void 0;
const typeorm_1 = require("typeorm");
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
    entities: ['dist/**/*.entity{.ts,.js}'],
    subscribers: [],
    migrations: ['dist/migrations/*{.ts,.js}'],
    autoLoadEntities: true
};
exports.default = (0, config_1.registerAs)('typeorm', () => exports.config);
exports.connectionSource = new typeorm_1.DataSource(exports.config);
//# sourceMappingURL=typeorm.js.map