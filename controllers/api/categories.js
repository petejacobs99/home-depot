const Category = require('../../models/category')

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({})
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
exports.getCatsbyDep = async (req, res) => {
    try {
        const cats = await Category.find({department: req.params.department})
        res.status(200).json(cats)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
// exports.getCategoriesByDepartment = async (req, res) => {
//     try {
//         const departmentName = req.params.departmentName

//         // Find the department based on the departmentName
//         const department = await Department.findOne({ name: departmentName }).populate({
//             path: 'categories',
//             populate: {
//                 path: 'items'
//             }
//         })

//         if (!department) {
//             return res.status(404).json({ error: 'Department not found' })
//         }

//         res.status(200).json(department.categories)
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }


