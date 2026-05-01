import { getCurrentUser } from "/src/services/api"
import { redirect } from "react-router-dom"

export async function loginLoader({ request }) {
  try {
    await getCurrentUser()
    return redirect("/host")
  } catch (error) {
    if (error.status !== 401) {
      throw error
    }
    return new URL(request.url).searchParams.get("message")
  }
}