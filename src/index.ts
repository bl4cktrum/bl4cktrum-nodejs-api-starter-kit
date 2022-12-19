import './config'
import express from 'express';
import {router} from './routes';
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const prisma = new PrismaClient()

// prisma.user.findMany().then(users => {
//     console.log(users);
// })

// Router Middleware
app.use(`/api/${process.env.API_VERSION}`,router)

app.listen(process.env.PORT,()=>{
    console.log('\x1b[32m%s\x1b[0m','[tadit] Backend app is working now on port'.padEnd(43)+':',process.env.PORT);
    console.log('\x1b[32m%s\x1b[0m','[tadit] Environment'.padEnd(43)+':',process.env.NODE_ENV);
    console.log('\x1b[32m%s\x1b[0m','[tadit] Host'.padEnd(43)+':',process.env.HOST);
    console.log('\x1b[32m%s\x1b[0m','[tadit] App is available now on'.padEnd(43)+':',`http://${process.env.HOST}:${process.env.PORT}`);
    console.log('\x1b[32m%s\x1b[0m','[tadit] API is available now on'.padEnd(43)+':',`http://${process.env.HOST}:${process.env.PORT}/api/${process.env.API_VERSION}`);
})
