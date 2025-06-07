import express from "express"
import {
  listarPresentes,
  reservarPresente,
  desreservarPresente,
} from "../controllers/presenteController.js"

const router = express.Router()

router.get("/", listarPresentes)
router.post("/:id/reservar", reservarPresente)
router.post("/:id/desreservar", desreservarPresente)

export default router
