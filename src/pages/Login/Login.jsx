import {
  useActionData,
  useNavigation,
  Form,
  Link,
  useSearchParams
} from "react-router-dom"
import "./Login.css"


export default function Login() {
  const [searchParams,] = useSearchParams()
  const message = searchParams.get("message")
  const error = useActionData()
  const navigation = useNavigation()

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error &&
        <span
          className="red"
          style={{ marginBottom: "20px" }}
        >
          {error}
        </span>
      }

      <Form
        method="post"
        className="login-form"
        replace
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Logging in..."
            : "Log in"
          }
        </button>
      </Form>

      <p className="auth-redirect">
        Don't have an account? <Link to="/register">Create one here</Link>
      </p>
    </div>
  )

}
