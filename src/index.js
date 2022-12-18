"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Load enviroment variables to process environments...
dotenv_1.default.config({
    path: 'environments/development.env'
});
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
// Import sequelize after dotenv config setted.
const db_connector_1 = require("./utils/db-connector");
checkDatabaseConnection();
const app = (0, express_1.default)();
// Router Middleware
app.use(`/api/${process.env.API_VERSION}`, routes_1.router);
app.listen(process.env.PORT, () => {
    console.log('[tadit] Backend app is working now on port'.padEnd(43) + ':', process.env.PORT);
    console.log('[tadit] Environment'.padEnd(43) + ':', process.env.NODE_ENV);
    console.log('[tadit] Host'.padEnd(43) + ':', process.env.HOST);
    console.log('[tadit] App is available now on'.padEnd(43) + ':', `http://${process.env.HOST}:${process.env.PORT}`);
    console.log('[tadit] API is available now on'.padEnd(43) + ':', `http://${process.env.HOST}:${process.env.PORT}/api/${process.env.API_VERSION}`);
});
function checkDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield db_connector_1.sequelize.authenticate();
            console.log('Database connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
