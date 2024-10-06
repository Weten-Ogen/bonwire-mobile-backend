import express from 'express'
import dotenv from 'dotenv'



// initialization 
dotenv.config()
const app = express()


// middlewares 
app.use(express.json())

app.get('/', (req,res) => {
    res.send("hello and welcome to my backend")
})

const Port = 5000


// server
app.listen(Port ,() => {
    console.log(`Your app is running on port: ${Port}`)
} )