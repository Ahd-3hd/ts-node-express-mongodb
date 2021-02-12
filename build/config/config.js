"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: true,
    retryWrites: false,
    useCreateIndex: true
};
var MONGO_URI = process.env.MONGO_URI || "";
var SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || '';
var SERVER_PORT = process.env.SERVER_PORT || 1337;
var SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600;
var SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || '';
var SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || '';
var SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    token: {
        expireTime: SERVER_TOKEN_EXPIRETIME,
        issuer: SERVER_TOKEN_ISSUER,
        secret: SERVER_TOKEN_SECRET
    }
};
var config = {
    mongo: {
        uri: MONGO_URI,
        options: MONGO_OPTIONS
    },
    server: SERVER
};
exports.default = config;
