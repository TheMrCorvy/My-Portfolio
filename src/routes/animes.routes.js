import { Router } from "express"
import * as animesController from "../controllers/animes.controller"
import { verifyToken } from "../middlewares/auth"

const router = Router()

// router.get("/", animesController.get)

// router.get("/last-project", animesController.getLast)

router.post("/create", verifyToken, animesController.create)

router.put("/update/:animeId", verifyToken, animesController.update)

export default router
