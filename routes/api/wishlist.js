const express = require('express')
const router = express.Router()

const wishlistController = require('../../controllers/api/wishlist')

// Create a new wishlist for a user
router.post('/create', wishlistController.createWishlist)

// Get wishlist by user ID
router.get('/:userId', wishlistController.getWishlist)

// Add an item to the wishlist
router.post('/add/:itemID', wishlistController.addItemToWishlist)

// Remove an item from the wishlist
router.post('/remove/:itemID', wishlistController.removeItemFromWishlist)

// Delete the entire wishlist
router.post('/delete', wishlistController.deleteWishlist)

module.exports = router
