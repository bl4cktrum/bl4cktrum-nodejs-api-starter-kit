"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dialect = process.env.DATABASE_DIALECT;
const host = process.env.DATABASE_HOST;
const name = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
// @ts-ignore
exports.sequelize = new sequelize_1.Sequelize(name, user, password, {
    host: host,
    dialect: dialect,
});
