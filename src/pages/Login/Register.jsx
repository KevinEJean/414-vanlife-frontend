import {
  useActionData,
  useNavigation,
  Form,
  Link
} from "react-router-dom"


export default function Register() {
  const error = useActionData()
  const navigation = useNavigation()

  return (
    <div className="login-container">
      <h1>Create your account</h1>

      {/* Message d'erreur lors de la soumission du formulaire */}
      {error && <span className="red"> {error} </span>}

      <Form
        method="post"
        className="login-form"
        replace
      >
        <input
          name="name"
          type="text"
          placeholder="Full name"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Creating account..."
            : "Sign up"
          }
        </button>
      </Form>

      <p className="auth-redirect">
        Already have an account? <Link to="/login">Sign in here</Link>
      </p>
    </div>
  )
}
