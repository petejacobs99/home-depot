const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

app.use(express.json()) // req.body
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'public', 'img','logo.png')))
app.use(express.static(path.join(__dirname, 'public')))
// Check if token and create req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn')
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'))
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'))
app.use('/api/reviews', ensureLoggedIn, require('./routes/api/reviews'))
app.use('/api/wishlist', ensureLoggedIn, require('./routes/api/wishlist'))
app.use('/api/category', ensureLoggedIn, require('./routes/api/categories'))
<<<<<<< HEAD
=======
app.use('/api/department', ensureLoggedIn, require('./routes/api/departments'))
>>>>>>> 1407c2c877df8144731115878157120388b7ae0a

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app