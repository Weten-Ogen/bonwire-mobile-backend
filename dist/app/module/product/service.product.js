"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createProduct = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    const createProduct = yield prisma_1.default.product.create({
        data
    });
    return createProduct;
}));
const getProducts = (() => __awaiter(void 0, void 0, void 0, function* () {
    const getProducts = yield prisma_1.default.product.findMany({
        orderBy: {
            createdAt: "asc"
        }
    });
    return getProducts;
}));
const getProductById = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield prisma_1.default.product.findFirst({
        where: {
            id: data.id
        }
    });
    return product;
}));
const deleteProductById = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.product.delete({
        where: {
            id: data.id
        }
    });
    return data.id;
}));
const updateProductById = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProductById = yield prisma_1.default.product.update({
        where: {
            id: data.newreq.id
        },
        data: data.newreq.body
    });
    const result = {
        id: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.id,
        label: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.label,
        imageUrl: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.imageUrl,
        price: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.price,
        createdAt: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.createdAt,
        tag: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.tag,
        updatedAt: updateProductById === null || updateProductById === void 0 ? void 0 : updateProductById.updatedAt
    };
    return result;
}));
const createProducts = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.product.create({
        data: data
    });
    return result;
}));
const getProductsbyFilter = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    const datatag = yield data.filter.toUpperCase();
    const result = yield prisma_1.default.product.findMany({ where: {
            tag: datatag
        } });
    return result;
}));
const searchProduct = ((data) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield data.query.toLowerCase();
    const result = yield prisma_1.default.product.findMany({
        where: {
            label: query
        }
    });
    return result;
}));
exports.ProductService = {
    createProduct,
    searchProduct,
    getProductById,
    getProducts,
    deleteProductById,
    updateProductById,
    createProducts,
    getProductsbyFilter
};
