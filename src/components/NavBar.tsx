import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const nav = useLocation()

  return (
    <nav className="nav_container">
      <ul className="nav-items">
        <li className={`nav-item ${nav.pathname === "/" ? "active" : ""}`}>
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className={`nav-item ${
            nav.pathname === "/portfolio" ? "active" : ""
          }`}
        >
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li className={`nav-item ${nav.pathname === "/about" ? "active" : ""}`}>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
