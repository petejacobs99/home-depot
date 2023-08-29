import sendRequest from './send-request'

const BASE_URL = '/api/wishlist'

export function showWishlist() {
  return sendRequest(`${BASE_URL}`)
}

export function addToWishlist(subItemId, itemId) {
  return sendRequest(`${BASE_URL}/items/${subItemId}`, 'POST', {itemId})
}

export function removeFromWishlist(subItemId) {
  return sendRequest(`${BASE_URL}/items/${subItemId}`, 'PUT')
}