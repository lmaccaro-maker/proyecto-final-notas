import { API_URL } from "./constants"


const fetchjson = async (params, newUrl) => {
  try {
    const response = await fetch(newUrl ?? API_URL, params)

    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getNotes = async () => {
  return fetchjson({
    method: "GET"
  })
}

export const addNote = async (note) => {
  return fetchjson({
    method: "POST", 
    body: JSON.stringify(note)
  })
}

export const deleteNote = async (id) => {
  return fetchjson({
    method: "DELETE"
  }, API_URL + id)
}
