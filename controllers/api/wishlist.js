const Wishlist = require('../../models/wishlist')
const Item = require('../../models/item')

module.exports = {
    createWishlist,
    getWishlist,
    addItemToWishlist,
    removeItemFromWishlist,
    deleteWishlist
}

async function createWishlist(req, res) {
    const userId = req.user._id

    try { 
        const wishlist = new Wishlist({ user: userId })
        await wishlist.save()

        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getWishlist(req, res) {
    try {
        const wishlist = await Wishlist.getWishlist(req.user._id)

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        res.status(200).json(wishlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function addItemToWishlist(req, res) {
    try {
        const wishlist = await Wishlist.getWishlist(req.user._id)
        await wishlist.addItem(req.params.itemId)
        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function removeItemFromWishlist(req, res) {
    try {
        const wishlist = await Wishlist.getWishlist(req.user._id)
        await wishlist.removeItem(req.params.itemId)
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