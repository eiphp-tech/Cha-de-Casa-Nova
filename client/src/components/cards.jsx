const Cards = ({ imageURL, title, link, reservado, onReservar }) => {
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
        <h3 className="text-lg font-instru">{title}</h3>
        <div className="flex justify-between items-center">
          <button
            onClick={onReservar}
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
