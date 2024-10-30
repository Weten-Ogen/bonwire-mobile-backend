import express from 'express'
import { AuthController } from './controller.auth';
import auth from '../../middleware/auth';
import { UserRole } from '@prisma/client';
import { UserValidationSchema } from './validate.auth';
import validateRequest from '../../middleware/validateRequest';


const router = express.Router();

router.post("/login",AuthController.loginUser);

router.post(
    "/register",
    AuthController.createUser
);

export const AuthRoutes =  router