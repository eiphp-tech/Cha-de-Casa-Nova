import React from "react"
import { ArrowRight } from "lucide-react"

const ExternalActionButton = ({ text, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:bg-stone-700 transition-colors duration-300 
      ease-in-out flex items-center justify-between gap-1 bg-black text-white font-instru 
      font-bold text-xl rounded-md p-2 w-full"
    >
      <span>{text}</span>
      <ArrowRight className="w-5 h-5" />
    </a>
  )
}

export default ExternalActionButton
