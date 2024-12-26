import { UserService } from "./user.sevice";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Response,Request } from "express";
import httpStatus from "http-status";



const getUserById = catchAsync(async(req:Request, res:Response) => {
    const id = req.params
    
    const user = await UserService.getuserbyId(id)
    
    sendResponse(res , {
        statusCode: httpStatus.OK,
        success:true,
        message: "got user by id successfully",
        data : user
    })
})



export const UserController = {
    getUserById
}