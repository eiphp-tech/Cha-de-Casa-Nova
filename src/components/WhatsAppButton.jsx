import React from "react"
import { ArrowRight } from "lucide-react"

const WhatsAppButton = () => {
  const phone = "553496823050"
  const message = "Olá! Confirmo minha presença."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`

  const handleClick = () => {
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="hover:bg-stone-700 transition-colors duration-300 ease-in-out flex items-center justify-between gap-1 
      bg-black text-white font-instru font-bold text-xl rounded-md p-2 w-full"
    >
      Confirmar Presença
      <ArrowRight className="w-5 h-5" />
    </button>
  )
}

export default WhatsAppButton
