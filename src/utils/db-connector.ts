import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config({
    path: 'environments/development.env'
});

const dialect = process.env.DATABASE_DIALECT;
const host = process.env.DATABASE_HOST;
const name = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

//@ts-ignore
export const sequelize = new Sequelize(name,user,password,{
    host: host,
    dialect: dialect,
})
