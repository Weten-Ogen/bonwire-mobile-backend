import express from 'express'
import { register } from '../controllers/auth.js'
 
// get the router
const authRouter = express.Router()

authRouter.get('/',register)



export default authRouter