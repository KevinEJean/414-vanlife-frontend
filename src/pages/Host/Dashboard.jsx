import { Suspense } from "react"
import { useLoaderData, Link } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import Spinner from "../../components/ui/Spinner"
import HostVansList from "../../components/HostVanList"
import "./Dashboard.css"

export default function Dashboard() {
  const { vans, user } = useLoaderData()

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome {user.name}!</h1>
          <p>Income last <span>30 days</span></p>
          <h2>$2,260</h2>
        </div>
        <Link className="nav-button" to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews" className="nav-button">
          Details
        </Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link className="nav-button" to="vans">
            View all
          </Link>
        </div>
        <Suspense fallback={<Spinner item="vans" />}>
          <HostVansList p={vans} />
        </Suspense>
      </section>
    </>
  )
}