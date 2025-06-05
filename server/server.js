import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import giftRoutes from "./routes/gifts.routes.js"

const app = express()

// ✅ CORS liberando acesso ao front
app.use(
  cors({
    origin: "http://localhost:5173", // ou seu domínio do front ex: https://meulista.vercel.app
    methods: ["GET", "POST", "PATCH"],
  })
)

app.use(express.json())

// MongoDB connection (ajuste seu URI real)
mongoose.connect("mongodb://localhost:27017/lista-presentes")

// Routes
app.use("/api/gifts", giftRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
