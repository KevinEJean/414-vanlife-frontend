import "./VanDetail.css"

import { useLocation, Link, useLoaderData } from "react-router-dom"
import { Suspense } from "react"

import Spinner from "/src/components/ui/Spinner"
import Van from "/src/components/Van"


export default function VanDetail() {
  const { van } = useLoaderData()
  const location = useLocation()

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="van-detail-container">
      <Link
        to={`../${search}`}
        relative="path"
        className="back-button"
      >&larr; <span>Back to {type} vans</span></Link>
      <Suspense fallback={<Spinner item="van detail" />}>
        <Van p={van} />
      </Suspense>
    </div>

  )
}

