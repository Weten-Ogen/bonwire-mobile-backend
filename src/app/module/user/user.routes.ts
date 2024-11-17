import express from "express";
import { UserController } from "./user.controller";


const router = express.Router();

router.get("/:id", UserController.getUserById)


export const UserRoutes = router
