import "./HostLayout.css"
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {

  const linkClassName = ({ isActive }) => isActive ? "nav-button active" : "nav-button"

  return (
    <>
      <nav className="host-nav">
        <NavLink to="." end className={linkClassName}>
          Dashboard
        </NavLink>
        <NavLink to="income" className={linkClassName}>
          Income
        </NavLink>
        <NavLink to="reviews" className={linkClassName}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>

  )
}