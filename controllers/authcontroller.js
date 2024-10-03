const asyncHandler = require('express-async-handler')

const register  = asyncHandler(async(req,res) => {
    const {email, firstName,lastName,password,country} = await req.body
    res.status(200).json({message: body})
})

const login = asyncHandler(async(req,res) => {
    const {email, firstName,lastName, password } = req.body
    const hashPassword = ""
    const data = {email,firstName,lastName,hashPassword}
    res.status(200).json({message:data})
})

const forgottenPassword = asyncHandler(async(req,res) => {
    
    res.status(200).json({message:`forgotten password` })
})