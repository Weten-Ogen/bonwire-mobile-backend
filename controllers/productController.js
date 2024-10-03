const asyncHandler = require('express-async-handler')

const getProduct = asyncHandler(async(req,res) => {
    res.status(200).json({message: "this is final"})
})

const getProductById = asyncHandler(async(req,res) =>{
    res.json({message: `get product with id ${req.params.id}`})
})

const deleteProductbyId= asyncHandler(async(req,res) => {
    res.json({message: `delete data by ${req.params.id}`})
}) 
const createProduct = asyncHandler(async(req,res) => {
    const body = await req.body
    res.json({message: body})
})


module.exports = {
    getProduct,
    getProductById,
    deleteProductbyId,
    createProduct
}