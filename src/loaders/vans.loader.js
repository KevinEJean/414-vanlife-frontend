import { getVans } from "/src/services/api"

export async function vansLoader() {
  return { vans: getVans() }
}