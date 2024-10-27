const express = require('express')
const { createProduct, deleteProductById, getProduct, getProductById, updateProductById, addManyProducts }  = require('../controllers/product.js')
const authMiddleware = require('../middleware.js')

const app = express()


// get the router
const productRouter = express.Router()

productRouter.get("/all",getProduct )
productRouter.get('/product/:id',authMiddleware,getProductById)
productRouter.post('/create',authMiddleware,createProduct)
productRouter.post('/addProducts',authMiddleware,addManyProducts)
productRouter.put('/update/:id',authMiddleware,updateProductById)
productRouter.delete('/delete/:id',authMiddleware,deleteProductById)

module.exports = productRouter