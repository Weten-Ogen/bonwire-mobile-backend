import express from 'express'
import { AuthRoutes } from '../module/auth/route.auth';
import { ProductRoutes } from '../module/product/routes.product';
import { UserRoutes } from '../module/user/user.routes';
import { ChatRoute } from '../module/chat/route.chat';


const router = express.Router();


const moduleRoutes = [
    {
        path: "/auth",
        routes: AuthRoutes
    },
    {
        path: "/products",
        routes: ProductRoutes
    },
    {
        path: "/user",
        routes: UserRoutes
    },{
        path: "/chat",
        routes: ChatRoute
    }
]

moduleRoutes.forEach(route => router.use(route.path,route.routes)) 

export default router;
