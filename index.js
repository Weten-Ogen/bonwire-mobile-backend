import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import cors from 'cors'



// initialization 
dotenv.config()
const app = express()


// middlewares 
app.use(express.json())
app.use(cors())

// routes
app.get('/', (req,res) => {
    res.send("hello and welcome to my backend")
})

app.use('/auth', authRouter)


const Port = process.env.PORT || 5000


// server
app.listen(Port ,() => {
    console.log(`Your app is running on port: ${Port}`)
} )