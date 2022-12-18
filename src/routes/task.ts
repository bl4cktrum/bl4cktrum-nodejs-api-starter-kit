import express from "express";

export const taskRouter = express.Router();

taskRouter.get('/',(req, res) => {
    res.send('task main router')
})
