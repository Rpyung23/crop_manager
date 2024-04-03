"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
const db = new sequelize_1.Sequelize(config_1.DB_NAME, config_1.DB_USER, config_1.DB_PASS, {
    host: config_1.DB_HOST,
    dialect: 'mysql'
});
// const db = new Sequelize('dbmanager','postgres','admin',{
//         host:'localhost',
//         dialect:'postgres'
//     })
exports.default = db;
//# sourceMappingURL=connect.js.map