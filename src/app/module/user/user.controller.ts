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
        data:{
            id:user?.id,
            email:user?.email,
            contact:user?.contactNumber,
            status:user?.status,
            country:user?.country,
            address:user?.address,
            createdAt:user?.createdAt
        }
    })
})



export const UserController = {
    getUserById
}