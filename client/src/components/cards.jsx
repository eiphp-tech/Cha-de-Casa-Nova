import React from "react"
import { BookmarkPlus, BookmarkCheck } from "lucide-react"

const Cards = ({ gift, onReserve }) => {
  const { _id, nome, imageURL, link, reservado } = gift

  const handleClick = () => {
    if (!reservado) {
      onReserve(_id)
    }
  }

  return (
    <section className="w-80  bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-40 bg-gray-300 flex items-center justify-center">
        <img src={imageURL} alt={nome} className="object-cover h-full w-full" />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-instru">{nome}</h3>

        <div className="flex justify-between items-center">
          <button
            onClick={handleClick}
            className={`flex items-center gap-1 text-sm ${
              reservado ? "text-green-600" : "text-gray-700"
            }`}
          >
            {reservado ? (
              <BookmarkCheck size={18} />
            ) : (
              <BookmarkPlus size={18} />
            )}
            {reservado ? "Reservado" : "Reservar"}
          </button>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
          >
            Link
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cards
