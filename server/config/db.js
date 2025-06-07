import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Pehh:el7HDBqleyyk7d1r@mongod.jlpvowj.mongodb.net/BackChaDeCasaNova?retryWrites=true&w=majority&appName=mongod"
    )
    console.log("MongoDB conectado com sucesso.")
  } catch (error) {
    console.error("Erro ao conectar no MongoDB:", error)
  }
}

export default connectDB
