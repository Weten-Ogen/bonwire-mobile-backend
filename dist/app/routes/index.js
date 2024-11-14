"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_auth_1 = require("../module/auth/route.auth");
const routes_product_1 = require("../module/product/routes.product");
const user_routes_1 = require("../module/user/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/auth",
        routes: route_auth_1.AuthRoutes
    },
    {
        path: "/products",
        routes: routes_product_1.ProductRoutes
    },
    {
        path: "/user",
        routes: user_routes_1.UserRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
