"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_db_1 = __importDefault(require("./mongo-db"));
const postgress_db_1 = __importDefault(require("./postgress-db"));
const factory = (type) => {
    switch (type) {
        case 'mongo':
            return new mongo_db_1.default();
        case 'postgress':
            return new postgress_db_1.default();
        default:
            throw new Error('Invalid database type');
    }
};
exports.default = factory;
