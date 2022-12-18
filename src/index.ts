import dotenv from 'dotenv';
import express from 'express';
import {router} from './routes';
import {sequelize} from "./utils/db-connector";

// Load enviroment variables to process environments...
// sequelize
dotenv.config({
    path: 'environments/development.env'
});

checkDatabaseConnection();
const app = express();

// Router Middleware
app.use(`/api/${process.env.API_VERSION}`,router)

app.listen(process.env.PORT,()=>{
    console.log('\x1b[32m%s\x1b[0m','[tadit] Backend app is working now on port'.padEnd(43)+':',process.env.PORT);
    console.log('\x1b[32m%s\x1b[0m','[tadit] Environment'.padEnd(43)+':',process.env.NODE_ENV);
    console.log('\x1b[32m%s\x1b[0m','[tadit] Host'.padEnd(43)+':',process.env.HOST);
    console.log('\x1b[32m%s\x1b[0m','[tadit] App is available now on'.padEnd(43)+':',`http://${process.env.HOST}:${process.env.PORT}`);
    console.log('\x1b[32m%s\x1b[0m','[tadit] API is available now on'.padEnd(43)+':',`http://${process.env.HOST}:${process.env.PORT}/api/${process.env.API_VERSION}`);
})

async function checkDatabaseConnection(){
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
