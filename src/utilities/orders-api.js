import sendRequest from './send-request'

const BASE_URL = '/api/orders'

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`)
}

export function addToCart(subItemId, itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${subItemId}`, 'POST', { itemId })
}

export function setItemQtyInCart(subItemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { subItemId, newQty })
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST')
}

export function getOrderHistory() {
  return sendRequest(`${BASE_URL}/history`)
}

// export function moveToCart(subItemId) {
//   return sendRequest(`${BASE_URL}/wishlist`, 'POST', subItemId)
// }