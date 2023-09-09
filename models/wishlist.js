const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema')

const lineItemSchema = new Schema({
    item: itemSchema,
})

const wishlistSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [lineItemSchema],
})

wishlistSchema.statics.getWishlist = async function (userId) {
    return this.findOneAndUpdate(
        { user: userId },
        { upsert: true, new: true }
)}

wishlistSchema.methods.addItemToWishlist = async function (itemId) {
    const wishlist = this
    const lineItem = wishlist.items.find((item) =>
        item.item._id.equals(itemId)
    )

    if (!lineItem) {
        const item = await mongoose.model('Item').findById(itemId)
        wishlist.items.push({ item: item })
        return wishlist.save()
    }
}

module.exports = mongoose.model('Wishlist', wishlistSchema)
