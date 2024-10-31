import express from 'express'
import { AuthRoutes } from '../module/auth/route.auth';
import { ProductRoutes } from '../module/product/routes.product';


const router = express.Router();

const moduleRoutes = [
    {
        path: "/auth",
        routes: AuthRoutes
    },
    {
        path: "/products",
        routes: ProductRoutes
    }
]

moduleRoutes.forEach(route => router.use(route.path,route.routes)) 

export default router;
