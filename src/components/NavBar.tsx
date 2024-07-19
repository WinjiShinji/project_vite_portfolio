import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { FaAdjust, FaBars } from "react-icons/fa"
import useWindowDimensions from "../hooks/useWindowDimensions"

type Props = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export default function NavBar({ theme, setTheme }: Props) {
  const [showNav, setShowNav] = useState(false)
  const { width } = useWindowDimensions()
  const nav = useLocation()

  // Event Handlers //
  const handleShowNav = () => {
    if (showNav === true) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <nav className="nav_container">
      <button
        className="nav-btn"
        onClick={() => handleShowNav()}
        disabled={width < 768 ? false : true}
      >
        <FaBars />
      </button>
      <ul
        className={`nav-items ${
          width < 768 && showNav === false ? "hide-nav" : "show-nav"
        }`}
      >
        <li className={`nav-item ${nav.pathname === "/" ? "active" : ""}`}>
          <Link to={"/"} onClick={() => handleShowNav()}>
            Home
          </Link>
        </li>
        <li
          className={`nav-item ${
            nav.pathname === "/portfolio" ? "active" : ""
          }`}
        >
          <Link to={"/portfolio"} onClick={() => handleShowNav()}>
            Portfolio
          </Link>
        </li>
        <li className={`nav-item ${nav.pathname === "/about" ? "active" : ""}`}>
          <Link to={"/about"} onClick={() => handleShowNav()}>
            About
          </Link>
        </li>
        <button className="theme-btn" onClick={() => handleTheme()}>
          <FaAdjust />
        </button>
      </ul>
    </nav>
  )
}
