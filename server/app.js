import express from "express"
import presenteRoutes from "./routes/presenteRoutes.js"
import connectDB from "./config/db.js"

const app = express()
app.use(express.json())

connectDB()

app.use("/api/presentes", presenteRoutes)

export default app
