import "./HostVanList.css"
import { use } from "react"
import { Link } from "react-router-dom"

function HostVansList({ p }) {
  const vans = use(p)

  const hostVansEls = vans.map((van) => (
    <Link className="nav-button" to={`vans/${van.id}`} key={van.id}>
      <div className="host-van-single" >
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>

      </div>
    </Link >
  ))

  return (

    <div className="host-vans-list">
      <section>{hostVansEls}</section>
    </div>
  )
}

export default HostVansList 