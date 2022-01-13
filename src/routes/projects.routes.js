import { Router } from "express"
import * as projectsController from "../controllers/projects.controller"
import { verifyToken } from "../middlewares/auth"

const router = Router()

router.get("/", projectsController.get)

router.get("/last", projectsController.getLast)

router.post("/create", verifyToken, projectsController.create)

router.put("/update/:projectId", verifyToken, projectsController.update)

router.delete("/delete/:projectId", verifyToken, projectsController.deleteProject)

export default router
