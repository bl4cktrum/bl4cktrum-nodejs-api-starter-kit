export default class Auth{
    static register(res:any,req:any,next:any){
        // TODO
    }

    static login(req:any, res:any,next:any){
        // TODO
    }
}

/*
    BCRYPT
import bcrypt, {compare} from 'bcrypt'
bcrypt.compare(pass,hashedPass).then(value =>{})
bcrypt.hash(pass, 10).then(value => {})
*/

/*
    PRISMA
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
prisma.user.findMany().then(users => {
    console.log(users);
})
*/
