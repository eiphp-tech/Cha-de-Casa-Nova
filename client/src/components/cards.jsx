import { BookmarkPlus, BookmarkCheck } from "lucide-react"
import React from "react"

const Cards = ({ title, imageSlug, link, reservado, onReservar }) => {
  return (
    <section className="w-80 bg-white rounded-xl shadow-2xl shadow-black overflow-hidden">
      <div className="h-40 bg-gray-300 flex items-center justify-center">
        <img
          src={imageSlug}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[20px] font-instru font-bold">{title}</h3>
        <div className="flex justify-between items-center">
          <button
            onClick={onReservar}
            disabled={reservado} // Desativa o botão se já estiver reservado
            className={`${
              reservado ? "bg-green-100" : "bg-gray-300"
            } text-black text-[16px] font-semibold font-instru px-3 py-1 rounded flex items-center gap-2 `}
          >
            {reservado ? (
              <BookmarkCheck size={22} />
            ) : (
              <BookmarkPlus size={22} />
            )}
            {reservado ? "Reservado" : "Reservar"}
          </button>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 font-instru text-white text-[16px] font-semibold px-3 py-1 rounded"
          >
            Ver Sugestão
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cards
