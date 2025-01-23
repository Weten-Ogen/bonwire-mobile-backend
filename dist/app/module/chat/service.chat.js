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
exports.ChatService = exports.getRooms = exports.getMessages = exports.createMessage = exports.createChatRoom = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createChatRoom = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = data.id;
    const newroom = yield prisma_1.default.chatRoom.create({ data: {} });
});
exports.createChatRoom = createChatRoom;
const createMessage = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const message = data.message;
    const roomId = data.roomId;
    const userId = data.userId;
    const newmessage = yield prisma_1.default.message.create({
        data: {
            text: message,
            chatroom: roomId,
            sender: userId
        }
    });
});
exports.createMessage = createMessage;
const getMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    const allMessages = yield prisma_1.default.message.findMany();
    return allMessages;
});
exports.getMessages = getMessages;
const getRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    const allRooms = yield prisma_1.default.chatRoom.findMany();
    return allRooms;
});
exports.getRooms = getRooms;
exports.ChatService = {
    createMessage: exports.createMessage,
    createChatRoom: exports.createChatRoom,
    getMessages: exports.getMessages,
    getRooms: exports.getRooms
};
