const asyncHandler = require('express-async-handler')
const prisma = require('../lib/db.js');
const bcrypt = require('bcryptjs');
const { hash } = require('bcrypt');




const register  = asyncHandler(async(req,res) => {
    try {        
        const {email,firstName,lastName,password,country} = await req.body
        
        const userExisted = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        console.log(userExisted)
        const salt = 10
        const hashPassword = bcrypt.hashPassword(password, salt)
        // if(!exists) {
        //     console.log(hashPassword)
        //     const newuser = await prisma.user.create({
        //         data: {
        //             email,
        //             firstName,
        //             lastName,
        //             password:hashPassword,
        //             country
        //         }
        //     })
        //     return  res.status(201).json({message: newuser})
        // }else {
        //     return res.status(409).json({message: "This email already exist , login in "})

        // }
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