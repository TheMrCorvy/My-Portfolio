import { Router } from "express"
import * as projectController from "../controllers/projects.controller"

const router = Router()

router.get("/", projectController.get)

router.get("/last-project", projectController.getLast)

router.post("/create", projectController.create)

router.put("/update/:projectId", projectController.update)

export default router
