require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Department = require('../models/department');
const SubItem = require('../models/subItem');
const Item = require('../models/item');
const subItem = require('../models/subItem')(async function () {
	//clean out the database:
	// await Item.deleteMany({})
	// await SubItem.deleteMany({})
	// await Department.deleteMany({})
	// await Category.deleteMany({})

	// generate departments:
	Department.create([
		{ name: 'Kitchen' },
		{ name: 'Bathroom' },
		{ name: 'Appliances' },
		{ name: 'Hardware' }
	])
		.then((departments) => {
			return Category.create([
				{ name: 'Cabinets', image: 'test', department: departments[0] },
				{ name: 'Faucets', image: 'test', department: departments[0] },
				{ name: 'Backsplash', image: 'test', department: departments[0] },
				{ name: 'Garbage Disposal', image: 'test', department: departments[0] },

				{ name: 'Tubs', image: 'test', department: departments[1] },
				{ name: 'Shower Heads', image: 'test', department: departments[1] },
				{ name: 'Faucets', image: 'test', department: departments[1] },
				{ name: 'Toilets', image: 'test', department: departments[1] },

				{ name: 'Refridgerators', image: 'test', department: departments[2] },
				{ name: 'Ovens', image: 'test', department: departments[2] },
				{
					name: 'Washers and Dryers',
					image: 'test',
					department: departments[2]
				},
				{ name: 'Microwaves', image: 'test', department: departments[2] },

				{ name: 'Power Tools', image: 'test', department: departments[3] },
				{ name: 'Tools', image: 'test', department: departments[3] },
				{ name: 'Nails and Bolts', image: 'test', department: departments[3] },
				{ name: 'Buckets', image: 'test', department: departments[3] }
			]);
		})
		.then((categories) => {
			return SubItem.create([
				{
					color: 'Nickel',
					gallery: ['test', 'test', 'test'],
					price: 10
				},
				{
					color: 'Bronze',
					gallery: ['test', 'test', 'test'],
					price: 10
				},
				{
					color: 'Chrome',
					gallery: ['test', 'test', 'test'],
					price: 10
				}
			])
				.then((faucets) => {
					return Item.create({
						name: 'bathroom faucet',
						img: 'test',
						category: categories[1],
						details: `It's a faucet for the bathroom sink.`,
						searchTerms: ['faucet', 'bathroom', 'nickel', 'bronze', 'chrome'],
						subItems: [faucets]
					});
				})
				.then((refridgerator) => {
					return subItem.create([
						{
							color: 'silver',
							gallery: ['test', 'test', 'test'],
							price: 1000
						},
						{
							color: 'black',
							gallery: ['test', 'test', 'test'],
							price: 1200
						},
						{
							color: 'white',
							gallery: ['test', 'test', 'test'],
							price: 900
						}
					]);
				})
				.then((refridgerators) => {
					return Item.create([
						{
							name: 'LG',
							img: ['', '', ''],
							category: categories[2],
							details: '',
							searchTerms: [
								'refridgerators',
								'fridge',
								'kitchen',
								'silver',
								'white',
								'black'
							],
							subItems: [refridgerators]
						},
						{
							name: 'Samsung',
							img: ['', '', ''],
							category: categories[2],
							details: '',
							searchTerms: [
								'refridgerators',
								'fridge',
								'kitchen',
								'silver',
								'white',
								'black'
							],
							subItems: [refridgerators]
						},
						{
							name: 'Kitchen Aid',
							img: ['', '', ''],
							category: categories[2],
							details: '',
							searchTerms: [
								'refridgerators',
								'fridge',
								'kitchen',
								'silver',
								'white',
								'black'
							],
							subItems: [refridgerators]
						}
					]);
				})
				.then((oven) => {
					return subItem.create([
						{
							color: 'silver',
							gallery: ['test', 'test', 'test'],
							price: 600
						},
						{
							color: 'black',
							gallery: ['test', 'test', 'test'],
							price: 800
						},
						{
							color: 'white',
							gallery: ['test', 'test', 'test'],
							price: 500
						}
					]);
				})
				.then((ovens) => {
					return Item.create([
						{
							name: 'LG',
							img: ['', '', ''],
							category: categories[3],
							details: '',
							searchTerms: [
								'oven',
								'ovens',
								'kitchen',
								'silver',
								'white',
								'black'
							],
							subItems: [ovens]
						},
						{
							name: 'Samsung',
							img: ['', '', ''],
							category: categories[3],
							details: '',
							searchTerms: [
								'oven',
								'ovens',
								'kitchen',
								'silver',
								'white',
								'black'
							],
							subItems: [ovens]
						},
						{
							name: 'Kitchen Aid',
							img: ['', '', ''],
							category: categories[3],
							details: '',
							searchTerms: [
								'oven',
								'ovens',
								'kitchen',
								'silver',
								'white',
								'black'
							],
							subItems: [ovens]
						}
					]);
				})
				.then((Microwave) => {
					return subItem.create([
						{
							color: 'silver',
							gallery: ['test', 'test', 'test'],
							price: 200
						},
						{
							color: 'black',
							gallery: ['test', 'test', 'test'],
							price: 300
						},
						{
							color: 'white',
							gallery: ['test', 'test', 'test'],
							price: 100
						}
					]);
				})
				.then((Microwaves) => {
					return Item.create([
						{
							name: 'LG',
							img: ['', '', ''],
							category: categories[4],
							details: '',
							searchTerms: [
								'microwaves',
								'microwave',
								'kitchen',
								'appliances',
								'silver',
								'white',
								'black'
							],
							subItems: [Microwaves]
						},
						{
							name: 'Samsung',
							img: ['', '', ''],
							category: categories[4],
							details: '',
							searchTerms: [
								'microwaves',
								'microwave',
								'kitchen',
								'appliances',
								'silver',
								'white',
								'black'
							],
							subItems: [Microwaves]
						},
						{
							name: 'Kitchen Aid',
							img: ['', '', ''],
							category: categories[4],
							details: '',
							searchTerms: [
								'microwaves',
								'microwave',
								'kitchen',
								'appliances',
								'silver',
								'white',
								'black'
							],
							subItems: [Microwaves]
						}
					]);
				});
		});
})();
