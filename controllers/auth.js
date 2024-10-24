const prisma  = require('../lib/util.js')
const jwt  = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const  asyncHandler =  require('express-async-handler')


const logout =  asyncHandler(async(req,res) => {
    req.session.destroy(err => {
        if(err){
            return res.status(500).json({message: 'logout failed'})

        }
        res.clearCookie('token')
        res.status(200).json({message: 'Logout successfully'})
    })
})
const register  = asyncHandler(async(req,res) => {
    const {email,firstName,lastName,country,password} = await req.body
    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if(!existingUser) {
        try {
        
            const salt =  10
            const hashPassword = await bcrypt.hash(password,salt) 
            const newUser = await prisma.user.create({data: {
                email,firstName,lastName,country, password:hashPassword
            }})

            console.log(newUser)
            return res.status(201).json({data:newUser })
        // Create JWT token
        const JWT_SECRET = process.env.SECRET_KEY
        const token = jwt.sign({userId: newUser.id},JWT_SECRET,{expiresIn: '1hr'})
        
    
        } catch (error) {
            return res.status(500).json({message:error})
        }

    }    
    

})

const  updateUser = asyncHandler((async(req,res) => {
    
    try {
        
    } catch (error) {
        
    }
}))
const login = asyncHandler(async(req,res) => {
    const {email, password} = await req.body
    try {
        const user = await prisma.user.findFirst({
            where:{
                email
            }
        })
        if(!user){
            return res.status(409).json({message:"user does not exist"})
        }else{
            const comparePass =await  bcrypt.compare(password, user.password)
            if(comparePass){
                const token = generateToken(user);
                res.cookie('token', token , {
                    httpOnly: true,
                    sameSite: 'strict',
                    maxAge: 15  * 60 *1000
                })

                // add the new user to the session
                req.session.user = user

                res.status(200).json({
                    message: "Login  Successfully"
                })
            }else{
                res.status(409).json({message: "Wrong Password"})
            }
        }    
    } catch (error) {
        res.status(500).json({message: "Access Denied!, User does not exist . "})
    }
    
})

const resetPass = (asyncHandler(async(req,res) => {
    const {email,newPassword} =await req.body

    try {
      const existingUser = await prisma.user.findUnique({
        where: {email}
      })
      if(!existingUser) {
        return res.json({message: "there is no user with this email."})
        console.log('existing email')
      }else{
        const hashPassword = await bcrypt.hash(newPassword,10)
        const updatedUser = await prisma.user.update({
            where: {
                email
            },
            data: {
                password: hashPassword
            }
        })
        console.log(updatedUser)
       return  res.status(201).json({
            data: updatedUser,
            message: `Your password is successfully updated`})
      }    
    } catch (error) {
        return res.status(500).json({message: error})
    }
}))
const deleteUser = asyncHandler(async(req,res) => {
    const id = await req.params.id
    try {
        await prisma.user.delete({
            where:{
                id:id
            }
        })
        return res.status(200).json({message : `delete user with id ${id}`})
    } catch (error) {
        return res.status(500).json({message: error})
    }
})



module.exports =   {
    register,
    deleteUser,
    login,
    logout,
    resetPass
}