import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./Pages/Portfolio"
import About from "./Pages/About"
import { useState } from "react"

type ThemeState = [
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>
]

function App() {
  const [theme, setTheme]: ThemeState = useState("light")

  return (
    <main data-theme={theme}>
      <BrowserRouter>
        <NavBar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
