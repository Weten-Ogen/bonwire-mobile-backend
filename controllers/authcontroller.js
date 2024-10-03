const asyncHandler = require('express-async-handler')
const prisma = require('../lib/db.js');
const bcrypt = require('bcryptjs');
const { hash } = require('bcrypt');




const register  = asyncHandler(async(req,res) => {
    try {        
        const {email,firstName,lastName,password,country} = await req.body
        

        console.log(userExisted)
        const salt = 10
        const hashPassword = await bcrypt.hashPassword(password, salt)
        console.log(hashPassword)
    } catch (error) {
        return res.status(500).json({message: error})     
    }
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


module.exports = {
    register,
    forgottenPassword,
    login
}