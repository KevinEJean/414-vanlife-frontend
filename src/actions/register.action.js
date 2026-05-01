import { redirect } from "react-router-dom";
import { registerUser } from "/src/services/api";

async function registerAction({ request }) {
  const formData = await request.formData();
  const userInfo = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  try {
    await registerUser(userInfo);
    const message = "Registration successful! Please log in.";
    return redirect(`/login?message=${message}`);
  } catch (error) {
    return error.message ?
      `Registration failed (${error.message}).`
      :
      "Registration failed. Please try again."
  }

};

export default registerAction;