const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishlistSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
<<<<<<< HEAD
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
})

module.exports = mongoose.model('Wishlist', wishlistSchema)
=======
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
})

module.exports = mongoose.model('Wishlist', wishlistSchema);
>>>>>>> 20aa3caf65470350b01924bfd597b9185b93f534
