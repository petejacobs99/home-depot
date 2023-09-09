const Wishlist = require('../../models/wishlist')
const Item = require('../../models/item')

module.exports = {
    getWishlist,
    addItemToWishlist,
    removeItemFromWishlist,
    deleteWishlist
}


async function getWishlist(req, res) {
    try {
        const userId = req.params.userId
        const wishlist = await Wishlist.findOne({ user: userId }).populate('items.item')

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' })
        }

        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


async function addItemToWishlist(req, res) {
    const userId = req.user._id
    const itemId = req.body.itemId

    try {
        const wishlist = await Wishlist.getWishlist(userId)

        const lineItem = wishlist.items.find((item) =>
            item.item._id.equals(itemId)
        );

        if (!lineItem) {
            const item = await mongoose.model('Item').findById(itemId)

            wishlist.items.push({ item: item })
            await wishlist.save()
        }

        res.status(200).json(wishlist)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


async function removeItemFromWishlist(req, res) {
    try {
        const { wishlistId, itemId, subItemId } = req.body

        const wishlist = await Wishlist.findById(wishlistId)
        const indexToRemove = wishlist.items.findIndex((item) =>
            item.item.equals(itemId) && item.subItem.equals(subItemId)
        )

        if (indexToRemove === -1) {
            return res.status(404).json({ error: 'Item not found in the wishlist' })
        }

        wishlist.items.splice(indexToRemove, 1)
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
