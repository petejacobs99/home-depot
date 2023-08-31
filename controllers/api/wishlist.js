const Wishlist = require('../../models/wishlist')
const Item = require('../../models/item')

module.exports = {
    addItemToWishlist,
    removeItemFromWishlist,
    deleteWishlist
}

async function addItemToWishlist(req, res) {
    try {
        const { wishlistId, itemId } = req.body

        const item = await Item.findById(itemId)
        if (!item) {
            return res.status(404).json({ error: 'Item not found' })
        }

        const wishlist = await Wishlist.findById(wishlistId)
        wishlist.items.push(itemId)
        await wishlist.save()
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function removeItemFromWishlist(req, res) {
    try {
        const { wishlistId, itemId } = req.body

        const wishlist = await Wishlist.findById(wishlistId)
        wishlist.items.pull(itemId)
        await wishlist.save()
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function deleteWishlist(req, res) {
    try {
        const { wishlistId } = req.body
        await Wishlist.findByIdAndDelete(wishlistId)
        res.status(200).json({ message: 'Wishlist deleted' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
