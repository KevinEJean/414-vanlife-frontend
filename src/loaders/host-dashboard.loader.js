import { getHostVans } from "/src/services/api"
import { requireAuth } from "/src/services/auth"

export async function hostDashboardLoader({ request }) {
  const user = await requireAuth(request)
  return {
    vans: getHostVans(user.id),
    user
  }
} 