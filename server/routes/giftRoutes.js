const express = require("express")
const router = express.Router()
const {
  getAllGifts,
  createGift,
  reserveGift,
} = require("../controllers/giftController")

router.get("/", getAllGifts)
router.post("/", createGift)
router.patch("/:id/reserve", reserveGift)

module.exports = router
