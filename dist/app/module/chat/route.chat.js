"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatRoute = void 0;
const express_1 = __importDefault(require("express"));
const controller_chat_1 = require("./controller.chat");
const router = express_1.default.Router();
router.get('chat/getrooms', controller_chat_1.ChatController.getRooms);
router.get('/chat/getmessages', controller_chat_1.ChatController.getMessages);
router.get('/chat/createroom', controller_chat_1.ChatController.createRoom);
router.post('/chat/createmessage', controller_chat_1.ChatController.createMessage);
exports.ChatRoute = router;
