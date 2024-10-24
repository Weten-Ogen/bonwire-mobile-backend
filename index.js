const express = require('express')
const dotenv = require('dotenv')
const authRouter= require('./routes/auth.js')
const cors  = require('cors')
const productRouter=require('./routes/product.js')
const session = require("express-session")
 const authMiddleware = require('./middleware.js');


// initialization 
dotenv.config()
const app = express()


// middlewares 
app.use(express.json())
app.use(cors())


app.use(session({
    secret: process.env.SECRET_KEY ,
    resave: false,
    saveUninitialized: true,
    cookie: {secure:true}
    
}))

// routes
app.get('/', (req,res) => {
    res.send("hello world")
})

app.use('/auth',authRouter)
app.use('/products',authMiddleware,productRouter)


const Port = process.env.PORT 


// server
app.listen(Port,() => {
    console.log(`Your app is running on port: ${Port}`)
} )