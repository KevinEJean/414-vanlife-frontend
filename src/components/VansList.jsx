import "./VansList.css"
import { use } from "react";
import { Link } from "react-router-dom";

export default function VansList({ p, searchParams, setSearchParams }) {
  const vans = use(p)
  const typeFilter = searchParams.get("type")

  const displayedVans = typeFilter
    ? vans?.filter(van => van.type.toLowerCase() === typeFilter) || []
    : vans

  const vanElements = displayedVans?.map(van => (
    <Link to={`${van.id}`} key={van.id} className="nav-button">
      <div className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  )) || []

  return (
    <>
      <div className="van-list-filter-buttons">
        <button className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
        <button className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
        <button className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`} onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
        {typeFilter
          ? <button className="van-type clear-filters" onClick={() => setSearchParams()}>Clear Filter</button>
          : undefined
        }

      </div>
      <div className="van-list">
        {vanElements}
      </div>
    </>
  )

}