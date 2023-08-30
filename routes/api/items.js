const express = require('express')
const router = express.Router()
const itemCtrl = require('../../controllers/api/pokemon')

router.get('/', itemCtrl.index)
router.get('/category/:category', itemCtrl.showByCategory)
router.get('/:id', itemCtrl.show)
router.get('/items/search/:searchTerm', itemCtrl.search)
module.exports = router