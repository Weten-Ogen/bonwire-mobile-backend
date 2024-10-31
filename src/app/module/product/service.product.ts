import { Request, Response } from "express";
import config from "../../../config";
import prisma from "../../../shared/prisma";
import { UserRole,UserStatus } from "@prisma/client";



const createProduct = (async(data:any)=>{
    const createProduct = await prisma.product.create({
        data
    })
    return createProduct
})

const getProducts= (async(data:any) =>{
    const getProducts = await prisma.product.findMany({
        orderBy:{
            createdAt: "desc"
        }
    })
    return getProducts
})

const getProductById = (async(data:any) =>{
    const getProductById = await prisma.product.findFirst({
        where:{
            id: data.id
        }
    })
    const result = {
        id: getProductById?.id,
        label: getProductById?.label,
        imageUrl: getProductById?.imageUrl,
        price : getProductById?.price,
        description: getProductById?.description,
        tag: getProductById?.tag,
        createdAt: getProductById?.createdAt,
        updatedAt: getProductById?.updatedAt
    }
    return result

})

const deleteProductById = (async(data:any) => {
    await prisma.product.delete({
        where: {
            id: data.id
        }
    })
    return data.id
})

const updateProductById = (async(data:any) => {
    const updateProductById = await prisma.product.update({
        where: {
            id: data.newreq.id
        },
        data: data.newreq.body
        
    })
    const result ={
        id: updateProductById?.id,
        label: updateProductById?.label,
        imageUrl : updateProductById?.imageUrl,
        price : updateProductById?.price,
        createdAt: updateProductById?.createdAt,
        tag: updateProductById?.tag,
        updatedAt: updateProductById?.updatedAt
    }
    return result
})

const createProducts = (async(data:any) =>{
    const result = await prisma.product.create({
        data:data
    })
    return result
    
})




export const ProductService = {
    createProduct,
    getProductById,
    getProducts,
    deleteProductById,
    updateProductById,
    createProducts
}