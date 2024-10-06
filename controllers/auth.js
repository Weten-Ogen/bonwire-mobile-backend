import asyncHander from 'express-async-handler'
import bcrypt from 'bcryptjs'

const register  = asyncHander(async(req,res) => {
    const {email,firstName,lastName, country,password} = await req.body

    try {
        
    } catch (error) {
        
    }

    res.send('this is the auth')
})


export  {
    register
}