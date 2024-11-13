import express from "express";
import { UserController } from "./user.controller";


const router = express.Router();

router.post("/:id", UserController.getUserById)


export const UserRoutes = router
