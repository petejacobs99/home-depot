const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = require('./itemSchema')
const subItemSchema = require('./subItemSchema')

const lineItemSchema = new Schema(
	{
		item: itemSchema,
		subItem: subItemSchema,
	}
)

const wishlistSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	item: [lineItemSchema],
})

wishlistSchema.statics.getList = function (userId) {
	// 'this' is the Wishlist model
	return this.findOneAndUpdate(
		// query
		{ user: userId },
		// update
		{ user: userId },
		// upsert option will create the doc if
		// it doesn't exist
		{ upsert: true, new: true }
	)
}
wishlistSchema.methods.addItemToList = async function (itemId, subItemId) {
	const list = this
	const lineItem = list.lineItems.find((lineItem) =>
		lineItem.subitem._id.equals(subItemId)
	)
	if (lineItem) {
		return
	} else {
		const item = await mongoose.model('Item').findById(itemId)
		const subItem = await mongoose.model('SubItem').findById(subItemId)
		list.lineItems.push({ item: item, subItem: subItem })

	}
	return list.save();
}
module.exports = mongoose.model('Wishlist', wishlistSchema)
