const Department = require('../../models/department')

module.exports = {
    getDepartments,
    getSpecificItem
}

async function getDepartments (req, res) {
    try {
        // const departments = await Department.find().populate({
        //     path: 'categories',
        //     populate: {
        //         path: 'items'
        //     }
        // })

        // there isn't a items key in the category model. 
        // Additionally there is already an getItemsByCategory function in the items controllers, so this isn't needed.
        const departments = await Department.find({})
        res.status(200).json(departments)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// The item controller already has a get item function
// This function isn't needed 

async function getSpecificItem (req, res) {
    try {
        const { departmentId, categoryId, itemId } = req.params
        const department = await Department.findById(departmentId).populate({
            path: 'categories',
            match: { _id: categoryId },
            populate: {
                path: 'items',
                match: { _id: itemId }
            }
        })

        if (!department || !department.categories.length || !department.categories[0].items.length) {
            return res.status(404).json({ error: 'Department, category, or item not found' })
        }

        res.status(200).json(department.categories[0].items[0])
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
