import mongoose from "mongoose"

const PresenteSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  imageURL: String,
  link: String,
  reservado: { type: Boolean, default: false },
})

export default mongoose.model("Presente", PresenteSchema)
