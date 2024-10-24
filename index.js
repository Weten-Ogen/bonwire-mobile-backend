const express = require('express')
const dotenv = require('dotenv')
const authRouter= require('./routes/auth.js')
const cors  = require('cors')
const productRouter=require('./routes/product.js')
const cookieParser= require('cookie-parser')
const path =  require('path')
const session = require("express-session")



// initialization 
dotenv.config()
const app = express()


// middlewares 
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: process.env.SECRET_KEY || '',
    resave: false,
    saveUninitialized: true,
    
}))

// routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

app.use('/auth',authRouter)
app.use('/products',productRouter)


const Port = process.env.PORT || 5000


// server
app.listen(Port,() => {
    console.log(`Your app is running on port: ${Port}`)
} )