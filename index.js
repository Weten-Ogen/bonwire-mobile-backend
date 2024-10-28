const express = require('express');
const dotenv = require('dotenv');
const authRouter= require('./routes/auth.js');
const productRouter=require('./routes/product.js');
const cookieParser = require('cookie-parser');
const cors = require('cors')

// initialization 
dotenv.config()
const app = express()
app.use(cors({
  credentials:true
}))
app.use(express.json())



app.get('/',(req,res) => {
  res.send("welcome to the beta of bonewire backend")
})

app.use('/auth',authRouter)
app.use('/products',productRouter)


const PORT = process.env.PORT || 3000

  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
