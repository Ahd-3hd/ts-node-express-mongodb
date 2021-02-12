"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var NAMESPACE = 'User';
var validateToken = function (req, res, next) {
    logging_1.default.info(NAMESPACE, 'TOKEN Validated,user authorized');
    return res.status(200).json({
        message: 'authorized'
    });
};
var register = function (req, res, next) {
    var _a = req.body, username = _a.username, password = _a.password;
    bcryptjs_1.default.hash(password, 10, function (hashError, hash) {
        if (hashError) {
            return res.status(500).json({
                message: hashError.message,
                error: hashError
            });
        }
        // insert user to db
    });
};
var login = function (req, res, next) { };
var getAllUsers = function (req, res, next) { };
exports.default = { validateToken: validateToken, register: register, login: login, getAllUsers: getAllUsers };
