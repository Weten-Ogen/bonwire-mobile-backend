import express from 'express'
import cors  from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
dotenv.config()

// initialization 
const app = express()


// middlewares 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.get('/', (req,res) => {
    res.send("hello and welcome to my backend")
})

const Port = process.env.PORT || 5000
// server
app.listen(Port , () => {
    console.log(`Your app is running on port: ${Port}`)
} )