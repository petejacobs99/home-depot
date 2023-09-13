const express = require('express');
const router = express.Router();
const {
	checkToken,
	dataController,
	apiController
} = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', dataController.signUp, apiController.auth);
// POST /api/users/login
router.post('/login', dataController.login, apiController.auth);
// PUT /api/users/:id
router.put('/:id', dataController.update, apiController.auth);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, checkToken);
// POST /api/users/guest 
// makeGuest
module.exports = router;
