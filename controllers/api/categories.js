const Category = require('../models/Category')
const Department = require('../models/Department')

module.exports = {
    getAllCategories,
    getCategoriesByDepartment,
}

async function getAllCategories(req, res) {
    try {
        const categories = await Category.find().populate('department')
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getCategoriesByDepartment (req, res) {
    try {
        const departmentName = req.params.departmentName

        // Find the department based on the departmentName
        const department = await Department.findOne({ name: departmentName }).populate({
            path: 'categories',
            populate: {
                path: 'items'
            }
        })

        if (!department) {
            return res.status(404).json({ error: 'Department not found' })
        }

        res.status(200).json(department.categories)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


