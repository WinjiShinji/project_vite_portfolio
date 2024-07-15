import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import NavBar from "./components/NavBar"
import Portfolio from "./Pages/Portfolio"
import About from "./Pages/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
