import sendRequest from './send-request'

const BASE_URL = '/api/items'

export function getAll() {
  return sendRequest(BASE_URL)
}
export function getByCategory(category){
  return sendRequest(`${BASE_URL}/category/${category}`)
}
export function searchItems(searchTerm) {
  return sendRequest(`${BASE_URL}/search/${searchTerm}`)
}
export function getFeaturedItems() {
  return sendRequest(`${BASE_URL}/featured`)
}
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}
