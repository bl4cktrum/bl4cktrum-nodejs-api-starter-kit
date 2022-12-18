import express from "express";
import User from "../controllers/user";

export const userRouter = express.Router();

userRouter.get('/',User.getAllUsers)
