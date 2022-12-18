import dotenv from 'dotenv';
import express from 'express';
import {router} from './routes';

// Load enviroment variables to process environments...
dotenv.config({
    path: 'environments/development.env'
});

const app = express();

// Router Middleware
app.use(`/api/${process.env.API_VERSION}`,router)

app.listen(process.env.PORT,()=>{
    console.log('[tadit] Backend app is working now on port'.padEnd(43)+':',process.env.PORT);
    console.log('[tadit] Environment'.padEnd(43)+':',process.env.NODE_ENV);
    console.log('[tadit] Host'.padEnd(43)+':',process.env.HOST);
    console.log('[tadit] App is available now on'.padEnd(43)+':',`http://${process.env.HOST}:${process.env.PORT}`);
    console.log('[tadit] API is available now on'.padEnd(43)+':',`http://${process.env.HOST}:${process.env.PORT}/api/${process.env.API_VERSION}`);
})
