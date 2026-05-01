import { NavLink, Link, Form } from "react-router-dom"
import "./Header.css"

export default function Header({ user }) {

  const linkClassName = ({ isActive }) => isActive ? "nav-button active" : "nav-button"

  return (
    <header>
      <Link className="site-logo" to="/">#VanLife</Link>
      <nav>
        <NavLink className={linkClassName} to="/about">About</NavLink>
        <NavLink className={linkClassName} to="/vans">Vans</NavLink>

        <Link className="nav-button" to={user ? "host" : "login"}>
          {user ? user.name : "Login"}
        </Link>

        {user &&
          <Form method="post" action="/logout">
            <button type="submit">Logout</button>
          </Form>
        }
      </nav>
    </header>
  )
}
