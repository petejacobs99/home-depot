require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Department = require('../models/department');
const Item = require('../models/item');

(async function () {
    // generate departments:
    await Department.deleteMany({})
    const departments = await Department.create([
        { name: 'Kitchen' },
        { name: 'Bathroom' },
        { name: 'Appliances' },
        { name: 'Hardware' }
    ])
    // generate categories:
    await Category.deleteMany({})
    const categories = await Category.create([
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

    //Create Items:
    await Item.deleteMany({})
    let test = 100
    const items = await Item.create([
        {
            name: 'bathroom faucet',
            img: 'test',
            category: categories[1],
            details: `It's a faucet for the bathroom sink.`,
            searchTerms: ['faucet', 'bathroom', 'nickel', 'bronze', 'chrome'],
            price: test
        },
        {
            name: 'kitchen cabinets',
            img: 'test',
            category: categories[0],
            details: `It's a cabinet for your kitchen`,
            searchTerms: ['kitchen', 'cabinet', 'cabinets', 'wood', 'natural', 'dark', 'white'],
            price: test
        },
        {
            name: 'backsplash',
            img: 'test',
            category: categories[2],
            details: `a backsplash for the kitchen`,
            searchTerms: [],
            price: test
        },
        {
            name: 'LG refridgerator',
            img: 'test',
            category: categories[9],
            details: '',
            searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Samsung refridgerator',
            img: 'test',
            category: categories[9],
            details: '',
            searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Kitchen Aid refridgerator',
            img: 'test',
            category: categories[9],
            details: '',
            searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'LG Oven',
            img: 'test',
            category: categories[10],
            details: '',
            searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Samsung Oven',
            img: 'test',
            category: categories[10],
            details: '',
            searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Kitchen Aid Oven',
            img: 'test',
            category: categories[10],
            details: '',
            searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'LG Dryer',
            img: 'test',
            category: categories[12],
            details: '',
            searchTerms: ['dryer', 'dryers', 'appliance', 'lg', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Samsung Dryer',
            img: 'test',
            category: categories[12],
            details: '',
            searchTerms: ['dryer', 'dryers', 'appliance', 'samsung', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Electrolux Dryer',
            img: 'test',
            category: categories[12],
            details: '',
            searchTerms: ['dryer', 'dryers', 'appliance', 'electrolux', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'LG Washer',
            img: 'test',
            category: categories[12],
            details: 'test',
            searchTerms: ['washer', 'washers', 'appliance', 'lg', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Samsung Washer',
            img: 'test',
            category: categories[12],
            details: 'test',
            searchTerms: ['washer', 'washers', 'appliance', 'samsung', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'Electrolux Washer',
            img: 'test',
            category: categories[12],
            details: 'test',
            searchTerms: ['washer', 'washers', 'appliance', 'electrolux', 'silver', 'white', 'black'],
            price: test
        },
        {
            name: 'DeWalt Power Drill',
            img: 'test',
            category: categories[14],
            details: '',
            searchTerms: ['drill', 'drills', 'power tools', 'Dewalt', 'yellow', 'green', 'red'],
            price: test
        },
        {
            name: 'Milwaukee Power Drill',
            img: 'test',
            category: categories[14],
            details: '',
            searchTerms: ['drill', 'drills', 'Milwaukee', 'power tools', 'yellow', 'green', 'red'],
            price: test
        },
        {
            name: 'RYOBI Power Drill',
            img: 'test',
            category: categories[14],
            details: '',
            searchTerms: ['drill', 'drills', 'RYOBI', 'power tools', 'yellow', 'green', 'red'],
            price: test
        }
    ])

    console.log(items)
    process.exit()
})();
