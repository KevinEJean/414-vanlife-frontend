import { useRouteError, Link } from "react-router-dom"

export default function Error() {
  const error = useRouteError()

  return (
    <>
      <h1>Oops!</h1>
      <h2>Something went wrong...</h2>
      <h3>{error.message}</h3>
      <pre>{error.status} - {error.statusText}</pre>

      <Link className="nav-link" to="/">Go back to safety</Link>
    </>
  )
}