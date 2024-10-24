const express =  require("express");
const {addToCart,createCart,getCartItem,removeFromCart}=require('../controllers/cart.js')


const cartRouter = express.Router();

cartRouter.get('/cartitems', getCartItem)
cartRouter.post('/cart',createCart)
cartRouter.post('/addtocart/:id',addToCart)
cartRouter.delete('/removefromcart/:id', )



module.exports= cartRouter