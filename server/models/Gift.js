const mongoose = require("mongoose")

const giftSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  imageURL: { type: String, required: true },
  link: { type: String, required: true },
  reservado: { type: Boolean, default: false },
})

module.exports = mongoose.model("Gift", giftSchema)
