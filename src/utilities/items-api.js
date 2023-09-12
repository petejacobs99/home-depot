import sendRequest from './send-request'

const BASE_URL = '/api'

export function getAll() {
  return sendRequest(BASE_URL)
}
export function getByCategory(depName, catName){
  return sendRequest(`${BASE_URL}/${depName}/${catName}/items`)
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
