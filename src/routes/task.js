"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.taskRouter = express_1.default.Router();
exports.taskRouter.get('/', (req, res) => {
    res.send('task main router');
});
