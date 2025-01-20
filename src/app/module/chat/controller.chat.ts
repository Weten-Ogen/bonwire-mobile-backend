import prisma from "../../../shared/prisma";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request,Response } from "express";
import { ChatService } from "./service.chat";


export const getMessages = catchAsync(async(req:Request,res:Response) => {
    const result = await ChatService.getMessages();
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success: true,
        message:'got all messages in room',
        data: result
    })
})

export const getRooms = catchAsync(async(req:Request,res:Response) => {
    const result = await ChatService.getRooms();
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success: true,
        message:'got all  rooms',
        data: result
    })
})


export const createRoom = catchAsync(async(req:Request,res:Response) =>{
    const result = await ChatService.createChatRoom(req.body)
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success: true,
        message:'got all messages in room',
        data: result
    })
})

export const createMessage = catchAsync(async(req:Request,res:Response) =>{
    const result = await ChatService.createMessage(req.body)
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success: true,
        message:'created a message in room',
        data: result
    })
})

export const ChatController = {
    getRooms,
    getMessages,
    createRoom,
    createMessage
}