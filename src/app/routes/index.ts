import express from 'express'
import { AuthRoutes } from '../module/auth/route.auth';


const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        routes: AuthRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path,route.routes)) 

export default router;
