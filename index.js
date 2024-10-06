import express from 'express'




// initialization 
const app = express()


// middlewares 


app.get('/', (req,res) => {
    res.send("hello and welcome to my backend")
})

const Port = 5000


// server
app.listen(Port ,() => {
    console.log(`Your app is running on port: ${Port}`)
} )