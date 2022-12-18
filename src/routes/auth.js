"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.authRouter = express_1.default.Router();
exports.authRouter.get('/', (req, res) => {
    res.send('auth main router');
});
exports.authRouter.post('/register', (req, res) => {
    res.send('auth register router');
});
