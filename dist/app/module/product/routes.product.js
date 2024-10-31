"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const client_1 = require("@prisma/client");
const controller_product_1 = require("./controller.product");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.USER), controller_product_1.ProductController.getProducts);
router.get("/:id", (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.USER), controller_product_1.ProductController.getProductById);
router.post("/create", (0, auth_1.default)(client_1.UserRole.ADMIN, client_1.UserRole.USER), controller_product_1.ProductController.createProduct);
router.post("/createMany", (0, auth_1.default)(client_1.UserRole.ADMIN), controller_product_1.ProductController.createProducts);
router.put("/update/:id", (0, auth_1.default)(client_1.UserRole.ADMIN), controller_product_1.ProductController.updateProductById);
router.delete("/delete/:id", (0, auth_1.default)(client_1.UserRole.ADMIN), controller_product_1.ProductController.deleteProductById);
exports.ProductRoutes = router;
