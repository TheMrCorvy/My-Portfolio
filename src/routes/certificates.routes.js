import { Router } from "express"
import * as certificatesController from "../controllers/certificates.controller"
import { verifyToken } from "../middlewares/auth"

const router = Router()

router.post("/create", verifyToken, certificatesController.create)

router.get("/", certificatesController.get)

router.get("/last", certificatesController.getLast)

export default router
