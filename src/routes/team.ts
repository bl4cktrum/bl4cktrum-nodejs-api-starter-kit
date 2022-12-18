import express from "express";

export const teamRouter = express.Router();

teamRouter.get('/',(req, res) => {
    res.send('team main router')
})
