import { getSingleVan } from "/src/services/api"

export async function vanDetailLoader({ params }) {
  return { van: getSingleVan(params.id) }
}
