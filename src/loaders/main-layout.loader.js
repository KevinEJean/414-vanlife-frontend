import { getCurrentUser } from "/src/services/api"

export async function mainLayoutLoader({ request }) {
  try {
    return { user: await getCurrentUser(request) }
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return { user: null }
  }

}