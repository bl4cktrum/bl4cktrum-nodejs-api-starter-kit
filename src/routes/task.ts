import express from "express";
import Task from "../controllers/task";

export const taskRouter = express.Router();

taskRouter.get('/',Task.getAllTasks)
