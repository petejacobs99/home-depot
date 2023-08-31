import sendRequest from './send-request'

const BASE_URL = '/api/departments'

export function getDepartments() {
  return sendRequest(BASE_URL)
}
export function getCategories(department){
  return sendRequest(`${BASE_URL}/${department}categories/`)
}