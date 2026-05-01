import "./Vans.css"

import { useLoaderData, useSearchParams } from "react-router-dom"
import { Suspense } from "react"

import VansList from "/src/components/VansList"
import Spinner from "/src/components/ui/Spinner"

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { vans } = useLoaderData()

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <Suspense fallback={<Spinner item="vans" />}>
        <VansList
          p={vans}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </Suspense>
    </div>
  )
}