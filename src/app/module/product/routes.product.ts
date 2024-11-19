import express from 'express';
import { ProductController } from './controller.product';


const router = express.Router()

router.get("/",ProductController.getProducts)

router.get("/:id", ProductController.getProductById)

router.post("/create",ProductController.createProduct)

router.post("/createMany",ProductController.createProducts)

router.put("/update/:id",ProductController.updateProductById)

router.delete("/delete/:id",ProductController.deleteProductById)


export const ProductRoutes = router