"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)());
// parse 
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// initializing the Socket.io
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
// listen for mesage 
io.on('connection', (socket) => {
    console.log("user connected successfully" + ` ${socket.id}`);
});
// use 
app.use(express_1.default.urlencoded({
    extended: true
}));
app.get("/", (req, res) => {
    res.send({
        message: "bonewire background application"
    });
});
app.use('/api', routes_1.default);
app.use(globalErrorHandler_1.default);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'API NOT FOUND!',
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found"
        }
    });
});
exports.default = app;
