import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter
} from "react-router-dom"

// Layouts
import { MainLayout, HostLayout } from "./layouts"

// Pages
import {
  Home,
  About,
  Vans,
  VanDetail,
  Login,
  Register,
  Dashboard,
  Income,
  Reviews,
  NotFound,
  Error
} from "./pages"

// Actions
import {
  loginAction,
  logoutAction,
  registerAction
} from "./actions"

// Loaders
import {
  authLoader,
  hostDashboardLoader,
  loginLoader,
  registerLoader,
  vansLoader,
  vanDetailLoader,
  mainLayoutLoader
} from "./loaders"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"
      element={<MainLayout />}
      errorElement={<Error />}
      loader={mainLayoutLoader}
    >

      <Route index element={<Home />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="/logout"
        action={logoutAction}
      />
      <Route
        path="register"
        element={<Register />}
        loader={registerLoader}
        action={registerAction}
      />
      <Route path="about" element={<About />} />

      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
      />

      <Route path="/host" element={<HostLayout />}>

        <Route
          index
          element={<Dashboard />}
          loader={hostDashboardLoader}
        />
        <Route
          path="income"
          element={<Income />}
          loader={authLoader}
        />

        <Route
          path="reviews"
          element={<Reviews />}
          loader={authLoader}
        />

      </Route>

      <Route path="*" element={<NotFound />} />
    </Route >
  ))

  return <RouterProvider router={router} />
}
export default App
