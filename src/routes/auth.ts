import express from "express";

export const authRouter = express.Router();

authRouter.get('/',(req, res) => {
    res.send('auth main router')
})
authRouter.post('/register',(req, res) => {
    res.send('auth register router')
})
