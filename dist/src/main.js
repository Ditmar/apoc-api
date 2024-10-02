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
const server_1 = __importDefault(require("./server"));
const user_routes_1 = __importDefault(require("./controller/user-routes"));
const postgress_client_1 = __importDefault(require("./database/postgress-client"));
const factory_1 = __importDefault(require("./database/factory/factory"));
if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    const result = dotenv.config();
    if (result.error) {
        throw result.error;
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    const dbConnection = (0, factory_1.default)('postgress');
    const dataBase = (0, postgress_client_1.default)(dbConnection);
    server_1.default.use('/api', (0, user_routes_1.default)(dataBase));
    server_1.default.listen(process.env.API_PORT, () => console.log(`server is running on port ${process.env.API_PORT}`));
}))();
