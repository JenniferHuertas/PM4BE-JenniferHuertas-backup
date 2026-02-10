"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_DROP = exports.DB_SYNC = exports.DB_DATABASE = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_PORT = exports.DB_HOST = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
exports.DB_HOST = process.env.DB_HOST;
exports.DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432;
exports.DB_USERNAME = process.env.DB_USERNAME;
exports.DB_PASSWORD = process.env.DB_PASSWORD;
exports.DB_DATABASE = process.env.DB_DATABASE;
exports.DB_SYNC = process.env.DB_SYNC ? process.env.DB_SYNC === "true" : false;
exports.DB_DROP = process.env.DB_DROP ? process.env.DB_DROP === "false" : false;
//# sourceMappingURL=envs.js.map