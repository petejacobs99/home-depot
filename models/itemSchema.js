const item = require('./item');
const subItemSchema = require('./subItemSchema');
const itemSchema = require('./itemSchema');
const subitemSchema = require('./subItemSchema');

const lineItemSchema = new Schema(
	{
		qty: { type: Number, default: 1 },
		item: itemSchema,
		subItem: subitemSchema
	},
	{
		timeStamps: true,
		toJSON: { virtuals: true }
	}
);

lineItemSchema.virtual('extPrice').get(function () {
	return this.qty * this.item.price;
});

const Schema = require('mongoose').Schema;

const itemSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		img: String,
		category: { type: Schema.Types.ObjectId, ref: 'Category' },
		details: String,
		searchTerms: [String],
		subItems: [subItemSchema]
	},
	{
		timestamps: true
	}
);

module.exports = itemSchema;
