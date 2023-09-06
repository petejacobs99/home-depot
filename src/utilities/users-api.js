import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function makeGuest() {
  return sendRequest(`${BASE_URL}/guest`, 'POST')
}

export function signUp(userData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', userData)
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function deleteUser() {
  return sendRequest(`${BASE_URL}/delete`, 'DELETE');
}
//