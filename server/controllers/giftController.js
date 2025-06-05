const Gift = require("../models/Gift")

// GET all gifts
exports.getAllGifts = async (req, res) => {
  const gifts = await Gift.find()
  res.json(gifts)
}

// POST new gift
exports.createGift = async (req, res) => {
  const gift = await Gift.create(req.body)
  res.status(201).json(gift)
}

// PATCH reservar presente
exports.reserveGift = async (req, res) => {
  const { id } = req.params
  const updated = await Gift.findByIdAndUpdate(
    id,
    { reservado: true },
    { new: true }
  )
  res.json(updated)
}
