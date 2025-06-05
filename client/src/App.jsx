import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

import Home from "./pages/Home"
import ListaPresentes from "./pages/ListaPresentes"

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col bg-light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ListaPresentes" element={<ListaPresentes />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
