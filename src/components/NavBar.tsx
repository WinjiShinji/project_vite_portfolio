import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="nav_container">
      <ul className="nav-items">
        <li className="nav-item active">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
