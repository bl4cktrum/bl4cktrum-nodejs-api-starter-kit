"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("./user");
const team_1 = require("./team");
const task_1 = require("./task");
const auth_1 = require("./auth");
exports.router = express_1.default.Router();
exports.router.use('/auth', auth_1.authRouter);
exports.router.use('/user', user_1.userRouter);
exports.router.use('/team', team_1.teamRouter);
exports.router.use('/task', task_1.taskRouter);
exports.router.get('/', (req, res) => {
    res.json({
        success: true,
        source: 'main router'
    });
});
