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
exports.ProductController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const service_product_1 = require("./service.product");
const createProduct = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_product_1.ProductService.createProduct(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        sucess: true,
        message: "Product created successfully",
        data: result
    });
}));
const getProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = yield req.params;
    const result = yield service_product_1.ProductService.getProducts(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        sucess: true,
        message: "Fetched all products ",
        data: result
    });
}));
const getProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = yield req.params;
    const result = yield service_product_1.ProductService.getProductById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        sucess: true,
        message: "fetched product at id",
        data: result
    });
}));
const deleteProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = yield req.params;
    const result = yield service_product_1.ProductService.deleteProductById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        sucess: true,
        message: "deleted product successfully",
        data: result
    });
}));
const updateProductById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = yield req.params;
    const { body } = yield req.body;
    const newreq = {
        body,
        id
    };
    const result = yield service_product_1.ProductService.updateProductById(newreq);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        sucess: true,
        message: "Updated product successfully",
        data: result
    });
}));
const createProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_product_1.ProductService.createProducts(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        sucess: true,
        message: "Created products successfully",
        data: result
    });
}));
exports.ProductController = {
    createProduct,
    createProducts,
    getProductById,
    getProducts,
    deleteProductById,
    updateProductById
};
