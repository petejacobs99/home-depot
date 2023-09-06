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
				{ name: 'Bathroom Faucets', image: 'test', department: departments[1] },
				{ name: 'Toilets', image: 'test', department: departments[1] },

				{ name: 'Refridgerators', image: 'test', department: departments[2] },
				{ name: 'Ovens', image: 'test', department: departments[2] },
				{ name: 'Washers and Dryers', image: 'test', department: departments[2] },
				{ name: 'Microwaves', image: 'test', department: departments[2] },

				{ name: 'Power Tools', image: 'test', department: departments[3] },
				{ name: 'Tools', image: 'test', department: departments[3] },
				{ name: 'Nails and Bolts', image: 'test', department: departments[3] },
				{ name: 'Buckets', image: 'test', department: departments[3] }
			]);
		})
		//<------------------cabinets------------------>
		.then(() => {
			return SubItem.create([]);
		})
		.then(() => {
			return Item.create([]);
		})
		//<------------------faucets------------------->
		.then((categories) => {
			return (
				SubItem.create([
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
							category: categories[2],
							details: `It's a faucet for the bathroom sink.`,
							searchTerms: ['faucet', 'bathroom', 'nickel', 'bronze', 'chrome'],
							subItems: [faucets]
						});
					})

					//<------------------backsplash------------>
					.then(() => {
						return SubItem.create([]);
					})
					.then(() => {
						return Item.create([]);
					})

					//<------------------Garbage Disposal------------>
					.then(() => {
						return SubItem.create([]);
					})
					.then(() => {
						return Item.create([]);
					})

					//<------------------Tubs-------------------->
					.then(() => {
						return SubItem.create([]);
					})
					.then(() => {
						return Item.create([]);
					})

					//<------------------Shower Heads-------------------->
					.then(() => {
						return SubItem.create([]);
					})
					.then(() => {
						return Item.create([]);
					})
					//<------------------Bathroom Faucets-------------------->
					.then(() => {
						return SubItem.create([]);
					})
					.then(() => {
						return Item.create([]);
					})
					//<------------------Toilets-------------------->
					.then(() => {
						return SubItem.create([]);
					})
					.then(() => {
						return Item.create([]);
					})
					//<------------------fridges--------------------->
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
								category: categories[9],
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
								category: categories[9],
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
								category: categories[9],
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
					//<--------------------ovens-------------------->
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
								category: categories[10],
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
								category: categories[10],
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
								category: categories[10],
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
					//<-----------------------washers--------------------->
					.then((Washer) => {
						return SubItem.create([
							{
								color: 'silver',
								gallery: ['test', 'test', 'test'],
								price: 800
							},
							{
								color: 'black',
								gallery: ['test', 'test', 'test'],
								price: 600
							},
							{
								color: 'white',
								gallery: ['test', 'test', 'test'],
								price: 400
							}
						]);
					})
					.then((Washers) => {
						return Item.create([
							{
								name: 'LG',
								img: ['', '', ''],
								category: categories[11],
								details: '',
								searchTerms: [
									'washer',
									'washers',
									'appliance',
									'lg',
									'silver',
									'white',
									'black'
								],
								subItems: [ovens]
							},
							{
								name: 'Samsung',
								img: ['', '', ''],
								category: categories[11],
								details: '',
								searchTerms: [
									'washer',
									'washers',
									'appliance',
									'samsung',
									'silver',
									'white',
									'black'
								],
								subItems: [ovens]
							},
							{
								name: 'Electrolux',
								img: ['', '', ''],
								category: categories[11],
								details: '',
								searchTerms: [
									'washer',
									'washers',
									'appliance',
									'electrolux',
									'silver',
									'white',
									'black'
								],
								subItems: [ovens]
							}
						]);
						//<--------------Dryers--------------->
					})
					.then((Dryer) => {
						return SubItem.create([
							{
								color: 'silver',
								gallery: ['test', 'test', 'test'],
								price: 800
							},
							{
								color: 'black',
								gallery: ['test', 'test', 'test'],
								price: 600
							},
							{
								color: 'white',
								gallery: ['test', 'test', 'test'],
								price: 400
							}
						]);
					})
					.then((Dryers) => {
						return Item.create([
							{
								name: 'LG',
								img: ['', '', ''],
								category: categories[12],
								details: '',
								searchTerms: [
									'dryer',
									'dryers',
									'appliance',
									'lg',
									'silver',
									'white',
									'black'
								],
								subItems: [Dryer]
							},
							{
								name: 'Samsung',
								img: ['', '', ''],
								category: categories[12],
								details: '',
								searchTerms: [
									'dryer',
									'dryers',
									'appliance',
									'samsung',
									'silver',
									'white',
									'black'
								],
								subItems: [Dryer]
							},
							{
								name: 'Electrolux',
								img: ['', '', ''],
								category: categories[12],
								details: '',
								searchTerms: [
									'dryer',
									'dryers',
									'appliance',
									'electrolux',
									'silver',
									'white',
									'black'
								],
								subItems: [Dryer]
							}
						]);
					})
					//<----------------Microwaves------------------>
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
								category: categories[13],
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
								category: categories[13],
								details: '',
								searchTerms: [
									'microwaves',
									'microwave',
									'kitchen',
									'samsung',
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
								category: categories[13],
								details: '',
								searchTerms: [
									'microwaves',
									'microwave',
									'kitchen',
									'kitchen aid',
									'appliances',
									'silver',
									'white',
									'black'
								],
								subItems: [Microwaves]
							}
						]);
					})
					//<----------------power tools--------------->
					.then((PowerTool) => {
						return SubItem.create([
							{
								color: 'yellow',
								gallery: ['test', 'test', 'test'],
								price: 150
							},
							{
								color: 'green',
								gallery: ['test', 'test', 'test'],
								price: 80
							},
							{
								color: 'red',
								gallery: ['test', 'test', 'test'],
								price: 100
							}
						]);
					})
					.then(() => {
						return Item.create([
							{
								name: 'DeWalt',
								img: ['', '', ''],
								category: categories[14],
								details: '',
								searchTerms: [
									'drill',
									'drills',
									'power tools',
									'Dewalt',
									'yellow',
									'green',
									'red'
								],
								subItems: [PowerTool]
							},
							{
								name: 'Milwaukee',
								img: ['', '', ''],
								category: categories[14],
								details: '',
								searchTerms: [
									'drill',
									'drills',
									'Milwaukee',
									'power tools',
									'yellow',
									'green',
									'red'
								],
								subItems: [PowerTool]
							},
							{
								name: 'RYOBI',
								img: ['', '', ''],
								category: categories[14],
								details: '',
								searchTerms: [
									'drill',
									'drills',
									'RYOBI',
									'power tools',
									'yellow',
									'green',
									'red'
								],
								subItems: [PowerTool]
							}
						]);
					})
					//<---------------------tools-------------------->
					.then((Tool) => {
						return SubItem.create([
							{
								color: 'yellow',
								gallery: ['test', 'test', 'test'],
								price: 50
							},
							{
								color: 'silver',
								gallery: ['test', 'test', 'test'],
								price: 25
							},
							{
								color: 'red',
								gallery: ['test', 'test', 'test'],
								price: 30
							}
						]);
					})
					.then((Tools) => {
						return Item.create([
							{
								name: 'Stanley',
								img: ['', '', ''],
								category: categories[15],
								details: '',
								searchTerms: [
									'tool set',
									'tools',
									'tool',
									'stanley',
									'yellow',
									'silver',
									'red'
								],
								subItems: [Tool]
							},
							{
								name: 'Husky',
								img: ['', '', ''],
								category: categories[15],
								details: '',
								searchTerms: [
									'tool set',
									'tools',
									'tool',
									'husky',
									'yellow',
									'silver',
									'red'
								],
								subItems: [Tool]
							},
							{
								name: 'Crescent',
								img: ['', '', ''],
								category: categories[15],
								details: '',
								searchTerms: [
									'tool set',
									'tools',
									'tool',
									'crescent',
									'yellow',
									'silver',
									'red'
								],
								subItems: [Tool]
							}
						]);
					})
					//<---------------------nails--------------------->
					.then((Nail) => {
						return SubItem.create([
							{
								color: 'gray',
								gallery: ['test', 'test', 'test'],
								price: 9.99
							},
							{
								color: 'silver',
								gallery: ['test', 'test', 'test'],
								price: 12.99
							},
							{
								color: 'bronze',
								gallery: ['test', 'test', 'test'],
								price: 6.99
							}
						]);
					})
					.then((Nails) => {
						return Item.create([
							{
								name: 'Grip-Rite',
								img: ['', '', ''],
								category: categories[16],
								details: '',
								searchTerms: [
									'nails',
									'nail',
									'Grip-Rite',
									'silver',
									'gray',
									'bronze'
								],
								subItems: [Nail]
							},
							{
								name: 'PRO-FIT',
								img: ['', '', ''],
								category: categories[16],
								details: '',
								searchTerms: [
									'nails',
									'nail',
									'Pro-Fit',
									'silver',
									'gray',
									'bronze'
								],
								subItems: [Nail]
							},
							{
								name: 'Hillman',
								img: ['', '', ''],
								category: categories[16],
								details: '',
								searchTerms: [
									'nails',
									'nail',
									'Hillman',
									'silver',
									'gray',
									'bronze'
								],
								subItems: [Nail]
							}
						]);
					})
					//<-------------------bolts------------------>
					.then((Bolt) => {
						return SubItem.create([
							{
								color: 'gray',
								gallery: ['test', 'test', 'test'],
								price: 9.99
							},
							{
								color: 'silver',
								gallery: ['test', 'test', 'test'],
								price: 12.99
							},
							{
								color: 'bronze',
								gallery: ['test', 'test', 'test'],
								price: 6.99
							}
						]);
					})
					.then((Bolts) => {
						return (
							Item.create([
								{
									name: 'Everbilt',
									img: ['', '', ''],
									category: categories[17],
									details: '',
									searchTerms: [
										'bolts',
										'bolt',
										'Everbilt',
										'silver',
										'gray',
										'bronze'
									],
									subItems: [Bolt]
								},
								{
									name: 'Simpson Strong-Tie',
									img: ['', '', ''],
									category: categories[17],
									details: '',
									searchTerms: [
										'bolts',
										'bolt',
										'Simpson Strong-Tie',
										'silver',
										'gray',
										'bronze'
									],
									subItems: [Bolt]
								},
								{
									name: 'Crown Bolt',
									img: ['', '', ''],
									category: categories[17],
									details: '',
									searchTerms: [
										'bolts',
										'bolt',
										'Crown Bolt',
										'silver',
										'gray',
										'bronze'
									],
									subItems: [Bolt]
								}
							])
								//<------------------buckets------------------->
								.then(() => {
									return subItem.create([]);
								})
								.then(() => {
									return Item.create([]);
								})
						);
					})
			);
		});
})();
