import sendRequest from './send-request'

const BASE_URL = '/api/'

export function getDepartments() {
  return sendRequest(`${BASE_URL}/departments/`)
}
export function getCategories(department){
  return sendRequest(`${BASE_URL}/categories/${department}`)
}