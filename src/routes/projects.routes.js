import { Router } from "express"
import * as projectController from "../controllers/projects.controller"
import { verifyToken } from "../middlewares/auth"

const router = Router()

router.get("/", projectController.get)

router.get("/last-project", projectController.getLast)

router.post("/create", verifyToken, projectController.create)

router.put("/update/:projectId", verifyToken, projectController.update)

router.delete("/delete/:projectId", verifyToken, projectController.deleteProject)

export default router
