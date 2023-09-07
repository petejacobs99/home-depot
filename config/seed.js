require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Department = require('../models/department');
const SubItem = require('../models/subItem');
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
    const categories = Category.create([
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

    // generate subItems:
    await SubItem.deleteMany({})
    const subCabinets = await SubItem.create([
        {
            color: 'Natural Wood',
            gallery: ['test', 'test', 'test'],
            price: 100
        },
        {
            color: 'Dark Wood',
            gallery: ['test', 'test', 'test'],
            price: 100
        },
        {
            color: 'White',
            gallery: ['test', 'test', 'test'],
            price: 100
        }
    ])
    const subFaucets = await SubItem.create([
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
    const subBacksplashes = await SubItem.create([
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
    const lGRefridgerators = await SubItem.create([
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
    ])
    const samsungRefridgerators = await SubItem.create([
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
    ])
    const kARefridgerators = await SubItem.create([
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
    ])
    const lGOvens = await SubItem.create([
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
    ])
    const kAOvens = await SubItem.create([
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
    ])
    const samsungOvens = await SubItem.create([
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
    ])
    const samsungDryers = await SubItem.create([{
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
    ])
    const lGDryers = await SubItem.create([{
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
    ])
    const electroluxDryers = await SubItem.create([{
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
    ])
    const powerTools1 = await SubItem.create([
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
    ])
    const powerTools2 = await SubItem.create([
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
    ])
    const powerTools3 = await SubItem.create([
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
    ])
    const washers1 = await SubItem.create([
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
    ])
    const washers2 = await SubItem.create([
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
    ])
    const washers3 = await SubItem.create([
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
    ])
    //Items:
    await Item.deleteMany({})
    const items = Item.create([
        {
            name: 'bathroom faucet',
            img: 'test',
            category: categories[1],
            details: `It's a faucet for the bathroom sink.`,
            searchTerms: ['faucet', 'bathroom', 'nickel', 'bronze', 'chrome'],
            subItems: [subFaucets]
        },
        {
            name: 'kitchen cabinets',
            img: 'test',
            category: categories[0],
            details: `It's a cabinet for your kitchen`,
            searchTerms: ['kitchen', 'cabinet', 'cabinets', 'wood', 'natural', 'dark', 'white'],
            subItems: [subCabinets]
        },
        {
            name: 'backsplash',
            img: 'test',
            category: categories[2],
            details: `a backsplash for the kitchen`,
            searchTerms: [],
            subItems: [subBacksplashes]
        },
        {
            name: 'LG refridgerator',
            img: 'test',
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
            subItems: [lGRefridgerators]
        },
        {
            name: 'Samsung refridgerator',
            img: 'test',
            category: categories[9],
            details: '',
            searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'white', 'black'],
            subItems: [samsungRefridgerators]
        },
        {
            name: 'Kitchen Aid refridgerator',
            img: 'test',
            category: categories[9],
            details: '',
            searchTerms: ['refridgerators', 'fridge', 'kitchen', 'silver', 'white', 'black'],
            subItems: [kARefridgerators]
        },
        {
            name: 'LG Oven',
            img: 'test',
            category: categories[10],
            details: '',
            searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'white', 'black'],
            subItems: [lGOvens]
        },
        {
            name: 'Samsung Oven',
            img: 'test',
            category: categories[10],
            details: '',
            searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'white', 'black'],
            subItems: [samsungOvens]
        },
        {
            name: 'Kitchen Aid Oven',
            img: 'test',
            category: categories[10],
            details: '',
            searchTerms: ['oven', 'ovens', 'kitchen', 'silver', 'white', 'black'],
            subItems: [kAOvens]
        },
        {
            name: 'LG Dryer',
            img: 'test',
            category: categories[12],
            details: '',
            searchTerms: ['dryer', 'dryers', 'appliance', 'lg', 'silver', 'white', 'black'],
            subItems: [lGDryers]
        },
        {
            name: 'Samsung Dryer',
            img: 'test',
            category: categories[12],
            details: '',
            searchTerms: ['dryer', 'dryers', 'appliance', 'samsung', 'silver', 'white', 'black'],
            subItems: [samsungDryers]
        },
        {
            name: 'Electrolux Dryer',
            img: 'test',
            category: categories[12],
            details: '',
            searchTerms: ['dryer', 'dryers', 'appliance', 'electrolux', 'silver', 'white', 'black'],
            subItems: [electroluxDryers]
        },
        {
            name: 'LG Washer',
            img: 'test',
            category: categories[12],
            details: 'test',
            searchTerms: ['washer', 'washers', 'appliance', 'lg', 'silver', 'white', 'black'],
            subItems: [washers1]
        },
        {
            name: 'Samsung Washer',
            img: 'test',
            category: categories[12],
            details: 'test',
            searchTerms: ['washer', 'washers', 'appliance', 'samsung', 'silver', 'white', 'black'],
            subItems: [washers2]
        },
        {
            name: 'Electrolux Washer',
            img: 'test',
            category: categories[12],
            details: 'test',
            searchTerms: ['washer', 'washers', 'appliance', 'electrolux', 'silver', 'white', 'black'],
            subItems: [washers3]
        },
        {
            name: 'DeWalt Power Drill',
            img: 'test',
            category: categories[14],
            details: '',
            searchTerms: ['drill', 'drills', 'power tools', 'Dewalt', 'yellow', 'green', 'red'],
            subItems: [powerTools1]
        },
        {
            name: 'Milwaukee Power Drill',
            img: 'test',
            category: categories[14],
            details: '',
            searchTerms: ['drill', 'drills', 'Milwaukee', 'power tools', 'yellow', 'green', 'red'],
            subItems: [powerTools2]
        },
        {
            name: 'RYOBI Power Drill',
            img: 'test',
            category: categories[14],
            details: '',
            searchTerms: ['drill', 'drills', 'RYOBI', 'power tools', 'yellow', 'green', 'red'],
            subItems: [powerTools3]
        },


    ])

    // //<-----------------------washers--------------------->
    // 
    //     //<----------------Microwaves------------------>
    //     .then((Microwave) => {
    //         return 
    //     })
    //     .then((Microwaves) => {
    //         return Item.create([
    //             {
    //                 name: 'LG',
    //                 img: ['', '', ''],
    //                 category: categories[13],
    //                 details: '',
    //                 searchTerms: [
    //                     'microwaves',
    //                     'microwave',
    //                     'kitchen',
    //                     'appliances',
    //                     'silver',
    //                     'white',
    //                     'black'
    //                 ],
    //                 subItems: [Microwaves]
    //             },
    //             {
    //                 name: 'Samsung',
    //                 img: ['', '', ''],
    //                 category: categories[13],
    //                 details: '',
    //                 searchTerms: [
    //                     'microwaves',
    //                     'microwave',
    //                     'kitchen',
    //                     'samsung',
    //                     'appliances',
    //                     'silver',
    //                     'white',
    //                     'black'
    //                 ],
    //                 subItems: [Microwaves]
    //             },
    //             {
    //                 name: 'Kitchen Aid',
    //                 img: ['', '', ''],
    //                 category: categories[13],
    //                 details: '',
    //                 searchTerms: [
    //                     'microwaves',
    //                     'microwave',
    //                     'kitchen',
    //                     'kitchen aid',
    //                     'appliances',
    //                     'silver',
    //                     'white',
    //                     'black'
    //                 ],
    //                 subItems: [Microwaves]
    //             }
    //         ]);
    //     })
    //     //<----------------power tools--------------->

    //     //<---------------------tools-------------------->
    //     .then((Tool) => {
    //         return SubItem.create([
    //             {
    //                 color: 'yellow',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 50
    //             },
    //             {
    //                 color: 'silver',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 25
    //             },
    //             {
    //                 color: 'red',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 30
    //             }
    //         ]);
    //     })
    //     .then((Tools) => {
    //         return Item.create([
    //             {
    //                 name: 'Stanley',
    //                 img: ['', '', ''],
    //                 category: categories[15],
    //                 details: '',
    //                 searchTerms: [
    //                     'tool set',
    //                     'tools',
    //                     'tool',
    //                     'stanley',
    //                     'yellow',
    //                     'silver',
    //                     'red'
    //                 ],
    //                 subItems: [Tool]
    //             },
    //             {
    //                 name: 'Husky',
    //                 img: ['', '', ''],
    //                 category: categories[15],
    //                 details: '',
    //                 searchTerms: [
    //                     'tool set',
    //                     'tools',
    //                     'tool',
    //                     'husky',
    //                     'yellow',
    //                     'silver',
    //                     'red'
    //                 ],
    //                 subItems: [Tool]
    //             },
    //             {
    //                 name: 'Crescent',
    //                 img: ['', '', ''],
    //                 category: categories[15],
    //                 details: '',
    //                 searchTerms: [
    //                     'tool set',
    //                     'tools',
    //                     'tool',
    //                     'crescent',
    //                     'yellow',
    //                     'silver',
    //                     'red'
    //                 ],
    //                 subItems: [Tool]
    //             }
    //         ]);
    //     })
    //     //<---------------------nails--------------------->
    //     .then((Nail) => {
    //         return SubItem.create([
    //             {
    //                 color: 'gray',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 9.99
    //             },
    //             {
    //                 color: 'silver',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 12.99
    //             },
    //             {
    //                 color: 'bronze',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 6.99
    //             }
    //         ]);
    //     })
    //     .then((Nails) => {
    //         return Item.create([
    //             {
    //                 name: 'Grip-Rite',
    //                 img: ['', '', ''],
    //                 category: categories[16],
    //                 details: '',
    //                 searchTerms: [
    //                     'nails',
    //                     'nail',
    //                     'Grip-Rite',
    //                     'silver',
    //                     'gray',
    //                     'bronze'
    //                 ],
    //                 subItems: [Nail]
    //             },
    //             {
    //                 name: 'PRO-FIT',
    //                 img: ['', '', ''],
    //                 category: categories[16],
    //                 details: '',
    //                 searchTerms: [
    //                     'nails',
    //                     'nail',
    //                     'Pro-Fit',
    //                     'silver',
    //                     'gray',
    //                     'bronze'
    //                 ],
    //                 subItems: [Nail]
    //             },
    //             {
    //                 name: 'Hillman',
    //                 img: ['', '', ''],
    //                 category: categories[16],
    //                 details: '',
    //                 searchTerms: [
    //                     'nails',
    //                     'nail',
    //                     'Hillman',
    //                     'silver',
    //                     'gray',
    //                     'bronze'
    //                 ],
    //                 subItems: [Nail]
    //             }
    //         ]);
    //     })
    //     //<-------------------bolts------------------>
    //     .then((Bolt) => {
    //         return SubItem.create([
    //             {
    //                 color: 'gray',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 9.99
    //             },
    //             {
    //                 color: 'silver',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 12.99
    //             },
    //             {
    //                 color: 'bronze',
    //                 gallery: ['test', 'test', 'test'],
    //                 price: 6.99
    //             }
    //         ]);
    //     })
    //     .then((Bolts) => {
    //         return (
    //             Item.create([
    //                 {
    //                     name: 'Everbilt',
    //                     img: ['', '', ''],
    //                     category: categories[17],
    //                     details: '',
    //                     searchTerms: [
    //                         'bolts',
    //                         'bolt',
    //                         'Everbilt',
    //                         'silver',
    //                         'gray',
    //                         'bronze'
    //                     ],
    //                     subItems: [Bolt]
    //                 },
    //                 {
    //                     name: 'Simpson Strong-Tie',
    //                     img: ['', '', ''],
    //                     category: categories[17],
    //                     details: '',
    //                     searchTerms: [
    //                         'bolts',
    //                         'bolt',
    //                         'Simpson Strong-Tie',
    //                         'silver',
    //                         'gray',
    //                         'bronze'
    //                     ],
    //                     subItems: [Bolt]
    //                 },
    //                 {
    //                     name: 'Crown Bolt',
    //                     img: ['', '', ''],
    //                     category: categories[17],
    //                     details: '',
    //                     searchTerms: [
    //                         'bolts',
    //                         'bolt',
    //                         'Crown Bolt',
    //                         'silver',
    //                         'gray',
    //                         'bronze'
    //                     ],
    //                     subItems: [Bolt]
    //                 }
    //             ])
    //                 //<------------------buckets------------------->
    //                 .then(() => {
    //                     return subItem.create([]);
    //                 })
    //                 .then(() => {
    //                     return Item.create([]);
    //                 })
    //         );
    //     })
    // 			);
    // 		});
    console.log(items)
})();
