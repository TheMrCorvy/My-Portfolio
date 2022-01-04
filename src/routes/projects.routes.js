import { Router } from "express"
import * as productController from "../controllers/projects.controller"

const router = Router()

router.get("/last-project", productController.getLastProject)

export default router
