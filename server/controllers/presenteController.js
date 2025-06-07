import Presente from "../models/Presente.js"

export const listarPresentes = async (req, res) => {
  const presentes = await Presente.find()
  res.json(presentes)
}

export const reservarPresente = async (req, res) => {
  const { id } = req.params
  const presente = await Presente.findOneAndUpdate(
    { id: parseInt(id) },
    { reservado: true },
    { new: true }
  )
  res.json(presente)
}

export const desreservarPresente = async (req, res) => {
  const { id } = req.params
  const presente = await Presente.findOneAndUpdate(
    { id: parseInt(id) },
    { reservado: false },
    { new: true }
  )
  res.json(presente)
}
