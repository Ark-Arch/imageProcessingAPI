"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var img_process_endpoint_1 = __importDefault(require("./app/img-process-endpoint"));
var routes = express_1.default.Router();
routes.use('/api/images', img_process_endpoint_1.default);
routes.get('/', function (req, res) {
    res.send('YOU ARE FINALLY WELCOME TO MY UDACITY IMAGE PROCESSING API PROJECT!');
});
exports.default = routes;
