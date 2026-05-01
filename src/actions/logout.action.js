import { redirect } from "react-router-dom";
import { logoutUser } from "/src/services/api";

async function logoutAction() {
  try {
    await logoutUser()
    return redirect("/")
  } catch (error) {
    console.error("Logout failed:", error)
    return redirect("/")
  }
};

export default logoutAction;