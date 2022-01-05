import { Router } from "express"

import * as authController from "../controllers/auth.controller"

const router = Router()

router.post("/register", authController.register)

router.post("/login", authController.login)

router.get("/logout", authController.logout)

export default router
