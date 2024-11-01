"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_product_1 = require("./controller.product");
const router = express_1.default.Router();
router.get("/", controller_product_1.ProductController.getProducts);
router.get("/:id", controller_product_1.ProductController.getProductById);
router.post("/create", controller_product_1.ProductController.createProduct);
router.post("/createMany", controller_product_1.ProductController.createProducts);
router.put("/update/:id", controller_product_1.ProductController.updateProductById);
router.delete("/delete/:id", controller_product_1.ProductController.deleteProductById);
exports.ProductRoutes = router;
