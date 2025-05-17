import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./index.css"

import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <main className="min-h-screen flex flex-col bg-light">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
