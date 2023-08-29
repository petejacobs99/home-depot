const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');
const subItemSchema = require('./subItemSchema')

const lineItemSchema = new Schema(
	{
		qty: { type: Number, default: 1 },
		item: itemSchema,
		subItem: subItemSchema
	},
	{
		timeStamps: true,
		toJSON: { virtuals: true }
	}
);

lineItemSchema.virtual('extPrice').get(function () {
	return this.qty * this.subItem.price;
});

module.exports = mongoose.model('lineItem', lineItemSchema);
