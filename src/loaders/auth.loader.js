import { requireAuth } from "/src/services/auth"

export async function authLoader({ request }) {
  return await requireAuth(request)
}