const express = require('express')
const { createProduct, deleteProductById, getProduct, getProductById, updateProductById }  = require('../controllers/product.js')
 
// get the router
const productRouter = express.Router()

productRouter.get("/all",getProduct )
productRouter.post('/create',createProduct)
productRouter.get('/product/:id',getProductById)
productRouter.put('/update/:id',updateProductById)
productRouter.delete('/delete/:id',deleteProductById)

module.exports = productRouter