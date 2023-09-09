import sendRequest from './send-request'

const BASE_URL = '/api/wishlist'

export function createWishlist() {
  return sendRequest(`${BASE_URL}/create`, 'POST')
}

export function showWishlist(userId) {
  return sendRequest(`${BASE_URL}/${userId}`)
}

export function addToWishlist(itemId) {
  return sendRequest(`${BASE_URL}/add/${itemId}`, 'POST')
}

export function removeFromWishlist(itemId) {
  return sendRequest(`${BASE_URL}/remove/${itemId}`, 'POST')
}