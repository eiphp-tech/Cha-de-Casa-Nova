import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Button = ({ text, path }) => {
  const navegacao = useNavigate()
  return (
    <button
      onClick={() => navegacao(path)}
      className="cursor-pointer flex items-center justify-center gap-1 bg-black text-white font-instru font-bold text-xl 
      rounded-md p-2 hover:bg-stone-700 transition-colors duration-300 ease-in-out"
    >
      <span>{text}</span>
      <ArrowRight className="w-5 h-5 text-white" />
    </button>
  )
}

export default Button
