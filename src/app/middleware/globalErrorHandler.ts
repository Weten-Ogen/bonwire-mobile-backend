import {NextFunction , Request, Response } from 'express';
import httpStatus from 'http-status'

const globalErrorHandler = (
    
        err: {message:string},
        req:Request,
        res:Response,
        next:NextFunction
    
) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
        sucess:false,
        message:err.message || "Something went wrong!",
        error: err
    })
}


export default globalErrorHandler;
