const express = require('express')
const router = express.Router()
const departmentController = require('../../controllers/api/departments')

// Route for getting all departments with categories and items
router.get('/', departmentController.getAllDepartments)

// Route for getting categories within a specific department
router.get('/:departmentId/categories', departmentController.getCategoriesInDepartment)

// Route for getting items within a specific department and category
router.get('/:departmentId/categories/:categoryId/items', departmentController.getItemsInCategory)

// Route for getting a specific item within a specific department and category
router.get('/:departmentId/categories/:categoryId/items/:itemId', departmentController.getSpecificItem)

module.exports = router
