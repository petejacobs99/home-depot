const express = require('express')
const router = express.Router()

const wishlistController = require('../../controllers/api/wishlist')

// Add items to wishlist
router.post('/add', wishlistController.addItemToWishlist)

// Remove items from wishlist
router.post('/remove', wishlistController.removeItemFromWishlist)

// Delete entire wishlist
router.post('/delete', wishlistController.deleteWishlist)

module.exports = router