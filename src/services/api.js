
// API URL
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"

// Fonction "squelette" pour faire des requêtes à l'API
async function request(path, options = {}) {

  const res = await fetch(`${BASE_URL}/api${path}`, {

    credentials: "include", // Inclure les cookies dans la requête (authentification)
    headers: {
      "Content-Type": "application/json",
    },
    ...options
  })

  // Tenter de parser la réponse en JSON, ou retourner un objet vide si ça échoue
  const data = await res.json().catch(() => ({}))

  // Si la réponse n'est pas OK, on rejette la promesse avec un objet d'erreur
  if (!res.ok) {
    throw {
      message: data.message ?? "Request failed",
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}

// Requêtes GET
export const getVans = async () => await request("/vans")
export const getSingleVan = async (id) => await request(`/vans/${id}`)
export const getHostVans = async (userId) => await request(`/users/${userId}/vans`)
export const getSingleHostVan = async (userId, vanId) => await request(`/users/${userId}/vans/${vanId}`)


// Requêtes AUTH
export const loginUser = async (creds) => (
  await request("/auth/signin", {
    method: "POST",
    body: JSON.stringify(creds)
  }))

export const registerUser = async (creds) => (
  await request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(creds)
  }))


export const getCurrentUser = async () => {
  return await request("/auth/whoami")
}

export const logoutUser = async () => {
  return await request("/auth/signout", {
    method: "POST"
  })
}

// Requêtes POST
export async function createVan(van) {
  return await request("/vans", {
    method: "POST",
    body: JSON.stringify(van)
  })
}
