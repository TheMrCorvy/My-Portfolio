import { Router } from "express"
import * as worldsController from "../controllers/worlds.controller"
import { verifyToken } from "../middlewares/auth"

const router = Router()

// router.get("/", worldsController.get)

// router.get("/last-project", worldsController.getLast)

router.post("/create", verifyToken, worldsController.create)

router.put("/update/:animeId", verifyToken, worldsController.update)

export default router
