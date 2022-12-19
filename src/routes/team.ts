import express from "express";
import Team from "../controllers/team";

export const teamRouter = express.Router();

teamRouter.get('/',Team.getAllTeams)
