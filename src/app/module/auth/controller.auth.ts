import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import {Request, Response} from "express";
import { AuthService } from "./server.auth";



const createUser = catchAsync(async(req:Request,res:Response) => {
    const result = await AuthService.createUser(req.body);
    sendResponse(res,{
        statusCode:httpStatus.CREATED,
        success:true,
        message:'User Created successfully',
        data:result
    })
})

const loginUser = catchAsync(async(req:Request, res:Response) => {
    const result = await AuthService.loginUser(req.body);
    sendResponse(res , {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        data:{
            id: result.id,
            name:result.name,
            email: result.email,
            role: result.role,
            accessToken: result.accessToken
        }
    })
})


export const AuthController = {
    createUser,
    loginUser
}