const express = require('express')
const dotenv = require('dotenv')
const authRouter= require('./routes/auth.js')
const productRouter=require('./routes/product.js')




// initialization 
dotenv.config()
const app = express()


// middlewares 
app.use(express.json())

// routes
app.get("/",(req,res) => {
    res.send("hello world")
})

app.use('/auth',authRouter)
app.use('/products',productRouter)


const Port = process.env.PORT 


// server
app.listen(Port,() => {
    console.log(`Your app is running on port: ${Port}`)
} )