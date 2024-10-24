const express = require('express')
const { deleteUser, login, register, logout,resetPass } = require('../controllers/auth.js')
 
// get the router
const authRouter = express.Router()

authRouter.post('/register',register)
authRouter.post('/login', login)
authRouter.post('/logout',logout)
authRouter.put('/reset', resetPass)

authRouter.delete('/delete/:id', deleteUser)



module.exports =  authRouter