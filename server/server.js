// 1. Importar as ferramentas
require("dotenv").config() // Carrega as variáveis de ambiente do ficheiro .env
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// 2. Inicializar a aplicação
const app = express()
const PORT = 3001

// 3. Middlewares
app.use(cors())
app.use(express.json())

// 4. Conectar ao MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB com sucesso!"))
  .catch((err) => console.error("Falha ao conectar ao MongoDB:", err))

// 5. Definir o Schema (a "planta" dos nossos dados)
const presenteSchema = new mongoose.Schema({
  title: String,
  imageURL: String,
  link: String,
  reservado: { type: Boolean, default: false },
})

// 6. Criar o Model (a ferramenta para interagir com a collection no DB)
const Presente = mongoose.model("Presente", presenteSchema)

// --- ROTAS DA API (AGORA COM MONGOOSE) ---

/**
 * @route   GET /api/presentes
 * @desc    Obtém a lista de todos os presentes do MongoDB
 */
app.get("/api/presentes", async (req, res) => {
  try {
    const presentes = await Presente.find() // .find() busca todos os documentos
    res.json(presentes)
  } catch (err) {
    res.status(500).send("Erro ao buscar presentes do banco de dados.")
  }
})

/**
 * @route   PUT /api/presentes/:id/reservar
 * @desc    Marca um presente específico como reservado
 */
app.put("/api/presentes/:id/reservar", async (req, res) => {
  try {
    const presenteId = req.params.id

    // Encontra o presente pelo ID e atualiza o campo 'reservado' para true
    const presenteAtualizado = await Presente.findByIdAndUpdate(
      presenteId,
      { reservado: true },
      { new: true } // {new: true} retorna o documento já atualizado
    )

    if (!presenteAtualizado) {
      return res.status(404).send("Presente não encontrado.")
    }

    res.json({
      message: "Presente reservado com sucesso!",
      presente: presenteAtualizado,
    })
  } catch (err) {
    res.status(500).send("Erro ao reservar o presente.")
  }
})

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor do back-end a rodar em http://localhost:${PORT}`)
})
