const API_URL = "http://localhost:5000/api/reservas"

export async function buscarReservas() {
  const res = await fetch(API_URL)
  return res.json() // retorna [1, 2, 3]
}

export async function reservar(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "POST",
  })
}

export async function desreservar(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })
}
