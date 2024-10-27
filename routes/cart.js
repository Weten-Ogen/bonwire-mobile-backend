const express =  require("express");
const {addToCart,createCart,getCartItem,removeFromCart}=require('../controllers/cart.js')
const authMiddleware = require('../middleware.js')

const cartRouter = express.Router();

cartRouter.get('/cartitems',authMiddleware,getCartItem)
cartRouter.post('/cart',authMiddleware,createCart)
cartRouter.post('/addtocart/:id',authMiddleware,addToCart)
cartRouter.delete('/removefromcart/:id',authMiddleware,removeFromCart)



module.exports= cartRouter