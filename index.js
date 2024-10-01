const express = require('express')
const dotenv = require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000


app.use("/api/products",require("./routes/productRoute.js"))


app.listen(PORT, () => {
    console.log('app started successfully ...')
})