const mongoose = require('mongoose')
const Schema = mongoose.Schema
const itemSchema = require('./itemSchema')
const subItemSchema = require('./subItemSchema')

const lineItemSchema = new Schema(
	{
		item: itemSchema,
		subItem: subItemSchema,
	}
);

const wishlistSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	item: [lineItemSchema],
});


module.exports = mongoose.model('Wishlist', wishlistSchema);
