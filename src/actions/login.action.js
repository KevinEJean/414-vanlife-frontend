import { redirect } from "react-router-dom";
import { loginUser } from "/src/services/api";

async function loginAction({ request }) {
  const formData = await request.formData();

  const creds = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const pathname = new URL(request.url)
    .searchParams.get("redirectTo") || "/"

  try {
    await loginUser(creds)
    return redirect(pathname)
  } catch (error) {
    if (error.status === 404 || error.status === 400) {
      return "Email or password is incorrect. Please try again."
    }
    return "Login failed. Please try again."
  }
};

export default loginAction