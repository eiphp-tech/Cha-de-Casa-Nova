import React, { useEffect, useState } from "react"
import Cards from "../components/cards"

import batedeira from "../assets/image/batedeira.svg"
import talheres from "../assets/image/talheres.svg"
import panelas from "../assets/image/panelas.svg"

const ListaPresentes = () => {
  const [presentes, setPresentes] = useState([])
  const API_URL = "https://api-lista-presentes.onrender.com"

  useEffect(() => {
    fetch(`${API_URL}/api/presentes`)
      .then((response) => response.json())
      .then((data) => setPresentes(data))
      .catch((error) => console.error("Erro ao buscar presentes:", error))
  }, [])

  const handleReservar = (id) => {
    fetch(
      `<span class="math-inline">/${API_URL}/api/presentes/</span>${id}/reservar`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then(() => {
        // Atualiza o estado local para refletir a mudança sem recarregar a página
        setPresentes((prevPresentes) =>
          prevPresentes.map((presente) =>
            presente.id === id ? { ...presente, reservado: true } : presente
          )
        )
      })
      .catch((error) => console.error("Erro ao reservar presente:", error))
  }

  return (
    <main className="relative w-full min-h-screen flex flex-col justify-center items-center pb-10 overflow-x-hidden">
      <span className="font-gotu text-2xl text-gray-950 font-bold -translate-x-16 -translate-y-8">
        Sugestão de
      </span>
      <h1 className="font-gotu text-6xl font-bold text-gray-950 w-80 -translate-x-6 -translate-y-12">
        Presentes
      </h1>

      <img
        src={batedeira}
        alt="Imagem/icon de batedeira"
        className="absolute top-0 right-0 -translate-y-60 translate-x-2/4 -rotate-12 -z-10"
      />

      <section className="mt-5 px-4">
        <h2 className="font-gotu text-2xl font-bold text-gray-950">
          Informações Importantes
        </h2>
        <p className="font-instru text-gray-950 w-90 mt-2 bg-gray-200 p-2 rounded-md">
          Olá, queridos amigos e familiares! <br />
          Estamos muito animados para celebrar esse momento tão especial com
          vocês e queremos compartilhar algumas informações importantes sobre a
          nossa lista de presentes. <br />
          Para manter a harmonia e o estilo que escolhemos para nosso lar,
          optamos por uma paleta de cores em{" "}
          <strong>preto, branco, cinza e inox</strong>. <br />
          Na lista abaixo, vocês encontrarão alguns
          <strong> cards com sugestões de presentes. </strong>
          Cada item tem dois botões: <br />
          Um para <strong>reservar o presente</strong>, garantindo que ninguém
          mais escolha o mesmo; <br />
          Outro com um <strong>link de sugestão de compra</strong>, para
          facilitar a sua escolha. Agradecemos de coração por todo carinho,
          apoio e por fazerem parte da nossa história.
        </p>
      </section>

      <img
        src={talheres}
        alt="Imagem/icon de talheres"
        className="absolute top-56 -left-48 h-[900px] w-auto rotate-12 -z-10"
      />

      <section className="grid grid-cols-1 gap-4 mt-10 px-4">
        {presentes.map((presente) => (
          <Cards
            key={presente.id}
            title={presente.title}
            imageURL={presente.imageURL}
            link={presente.link}
            reservado={presente.reservado} // Passa o estado de reservado para o Card
            onReservar={() => handleReservar(presente.id)} // Passa a função para o Card
          />
        ))}
      </section>

      <img
        src={panelas}
        alt="Imagem/icon de panela"
        className="absolute right-0 bottom-0 translate-x-[30%] translate-y-[50%] rotate-12 -z-10"
      />
    </main>
  )
}

export default ListaPresentes
