const asyncHandler = require('express-async-handler');
const prisma = require('../lib/util.js');

const getProduct = asyncHandler(async( req,res) => {
     
    try {
     const products = await prisma.product.findMany();
     return res.json({message: "loaded products successfully",data: products})   
    } catch (error) {
        res.json({message: error})
    }
})

const  createProduct = asyncHandler(async(req,res) => {
  const {label,imageUrl,price,description} = await req.body
  
  try {
   
    // check if there is a product with the same label
    const existingProduct = await prisma.product.findFirst({
       where: {
        label
        }
    })
    if(!existingProduct) {
        const newProduct = await prisma.product.create({
            data:{label,imageUrl,description,price}
        })
        console.log(newProduct)
        res.json({message: 'created the new product', 
            data: newProduct
        })
        
    }else{
        res.status(409).json({message: 'the product already exists.'})
    }
  } catch (error) {
    res.status(500).json({message: error})
}
   
    
})


const  getProductById = asyncHandler(async(req,res) => {
    const {id} = await req.params
    
    try {
      
    } catch (error) {
      
    }  
  })



  const deleteProductById  = asyncHandler(async(req,res) => {
    const {id} = await req.params
    
    try {
      
    } catch (error) {
      
    }  
  })


  const updateProductById = asyncHandler(async (req,res) => {
    const {id} = await req.params
    
    try {
      
    } catch (error) {
      
    }  
  })


module.exports =  {
    updateProductById,
    getProduct,
    createProduct,
    getProductById,
    deleteProductById,
}