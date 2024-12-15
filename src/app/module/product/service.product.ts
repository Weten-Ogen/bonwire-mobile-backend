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

const getProducts= (async() =>{
    const getProducts = await prisma.product.findMany({
        orderBy:{
            createdAt: "asc"
        }
    })
    return getProducts
})

const getProductById = (async(data:any) =>{    
    const product = await prisma.product.findFirst({
        where: {
            id: data.id
        }
    })
    return product
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


const getProductsbyFilter = (async(data:any) => {    
    const datatag = data.filter.toUpperCase()
    const result = await prisma.product.findMany({where:{
        tag:datatag
    }})

    return result
})



export const ProductService = {
    createProduct,
    getProductById,
    getProducts,
    deleteProductById,
    updateProductById,
    createProducts,
    getProductsbyFilter
}