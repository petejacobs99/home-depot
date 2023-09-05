const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_ROUNDS = 10

const userSchema = new Schema({
  firstName: { type: String, required: true, default: 'Guest'},
  lastName: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  isGuest: { type: Boolean, default: true }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password
      return ret
    }
  }
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
  return next()
})

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password)
}

module.exports = mongoose.model('User', userSchema)
