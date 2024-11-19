
import { AuthService } from "../auth/server.auth";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request,Response } from "express";
import { ProductService } from "./service.product";

const createProduct = (async(req:Request,res:Response)=>{
 const result = await ProductService.createProduct(req.body);
 sendResponse(res,{
    statusCode: httpStatus.CREATED,
    success:true,
    message:"Product created successfully",
    data:result
 })
})

const getProducts= catchAsync(async(req:Request,res:Response) =>{
    const {id} = await req.params
    const result = await ProductService.getProducts(id)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success:true,
        message:"Fetched all products ",
        data: result
    })
})

const getProductById = catchAsync(async(req:Request,res:Response) =>{
    const {id}  = req.params
    const result = await ProductService.getProductById(id)
    sendResponse(res , {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "fetched product at id",
        data: result

    })
})

const deleteProductById = catchAsync(async(req:Request,res:Response) => {
    const {id} = await req.params
    const result = await ProductService.deleteProductById(id)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "deleted product successfully",
        data: result
    })
})

const updateProductById = catchAsync(async(req:Request,res:Response) => {
    const {id} = await req.params
    const {body} = await req.body
    const newreq = {
        body,
        id
    }
    const result = await ProductService.updateProductById(newreq)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Updated product successfully",
        data: result
    })
})

const createProducts = catchAsync(async(req:Request,res:Response) =>{
    const result = await ProductService.createProducts(req.body.data)
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Created products successfully",
        data:result
    })
})



export const ProductController = {
    createProduct,
    createProducts,
    getProductById,
    getProducts,
    deleteProductById,
    updateProductById
}