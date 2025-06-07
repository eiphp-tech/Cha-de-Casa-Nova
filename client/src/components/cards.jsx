import { BookmarkPlus, BookmarkCheck } from "lucide-react"
import React, { useState } from "react"

const Cards = ({ imageURL, title, link }) => {
  const [reserved, setReserved] = useState(false)

  const handleReserve = () => {
    if (!reserved) {
      setReserved(true)
    }
  }
  return (
    <section className="w-80 bg-white rounded-xl shadow-md overflow-hidden">
      <div className="h-40 bg-gray-300 flex items-center justify-center">
        <img
          src={imageURL}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-instru font-semibold">{title}</h3>
        <div className="flex justify-between items-center">
          <button
            Add
            commentMore
            actions
            onClick={handleReserve}
            className={`flex items-center gap-1 text-sm ${
              reserved ? "text-green-600" : "text-gray-700"
            }`}
          >
            {reserved ? (
              <BookmarkCheck size={18} />
            ) : (
              <BookmarkPlus size={18} />
            )}
            {reserved ? "Reservado" : "Reservar"}
          </button>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
          >
            Ver Sugestão
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cards
