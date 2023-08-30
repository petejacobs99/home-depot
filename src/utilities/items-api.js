import sendRequest from './send-request'

const BASE_URL = '/api/items'

export function getAll() {
  return sendRequest(BASE_URL)
}
export function getByCategory(category){
  return sendRequest(`${BASE_URL}/category/${category}`)
}
export function searchItems(searchTerm) {
  return sendRequest(`${BASE_URL}/items/search/${searchTerm}`)
}
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}
