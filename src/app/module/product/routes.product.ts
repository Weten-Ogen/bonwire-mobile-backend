import express from 'express';
import authMiddleware from '../../middleware/auth';
import { UserRole } from '@prisma/client';
import { ProductController } from './controller.product';


const router = express.Router()

router.get("/", authMiddleware(UserRole.ADMIN,UserRole.USER),ProductController.getProducts)

router.get("/:id", authMiddleware(UserRole.ADMIN,UserRole.USER),ProductController.getProductById)

router.post("/create", authMiddleware(UserRole.ADMIN,UserRole.USER),ProductController.createProduct)

router.post("/createMany",authMiddleware(UserRole.ADMIN),ProductController.createProducts)

router.put("/update/:id", authMiddleware(UserRole.ADMIN),ProductController.updateProductById)

router.delete("/delete/:id",authMiddleware(UserRole.ADMIN),ProductController.deleteProductById)




export const ProductRoutes = router