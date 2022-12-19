import express from "express";
import Auth from "../controllers/auth";

export const authRouter = express.Router();

authRouter.post('/register',Auth.register)
authRouter.post('/login',Auth.login);
