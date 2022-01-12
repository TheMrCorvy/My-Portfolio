import { Router } from "express"
import * as animesController from "../controllers/animes.controller"
import { verifyToken } from "../middlewares/auth"

const router = Router()

router.get("/:sortBy/:direction", animesController.getPaginated)

router.get("/disk/:diskNumber/:sortBy/:direction", animesController.getByDisk)

router.post("/create", verifyToken, animesController.create)

router.put("/update/:animeId", verifyToken, animesController.update)

export default router
