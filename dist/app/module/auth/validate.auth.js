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
exports.UserValidationSchema = void 0;
const zod_1 = require("zod");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const isUniqueEmail = (field) => __awaiter(void 0, void 0, void 0, function* () {
    // check if email already exists
    const existingUser = yield prisma_1.default.user.findFirst({
        where: {
            OR: [{ email: field }, { name: field }]
        }
    });
    return !existingUser;
});
const UserRegSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string().optional(),
        name: zod_1.z.string({
            required_error: "Email is required"
        }).refine((name) => __awaiter(void 0, void 0, void 0, function* () {
            // check uniqueness
            return yield isUniqueEmail(name);
        }), {
            message: "Name already exists"
        }),
        email: zod_1.z.string().email().refine((email) => __awaiter(void 0, void 0, void 0, function* () {
            // check uniqueness
            return yield isUniqueEmail(email);
        }), {
            message: "Email already exists"
        }),
        password: zod_1.z.string({
            required_error: "Password is required"
        }),
        contactNumber: zod_1.z.string(),
        role: zod_1.z.enum(['USER', 'ADMIN']).optional(),
        country: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        status: zod_1.z.enum(['ACTIVE', 'BLOCKED']).optional(),
        createdAt: zod_1.z.string().optional(),
        updatedAt: zod_1.z.string().optional(),
    }),
});
const changePassword = {
    body: zod_1.z.object({
        oldpassword: zod_1.z.string({
            required_error: "old password is required"
        }),
        newpassword: zod_1.z.string({
            required_error: "new password is required"
        })
    })
};
exports.UserValidationSchema = {
    UserRegSchema,
    changePassword
};
