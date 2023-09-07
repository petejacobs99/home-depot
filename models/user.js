require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 10;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: String,
		email: { type: String, unique: true, lowercase: true },
		password: String,
		isGuest: { type: Boolean, default: false }
	},
	{
		timestamps: true,
		toJSON: {
			transform: function (doc, ret) {
				delete ret.password;
				return ret;
			}
		}
	}
);

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
	return next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password);
};
userSchema.methods.createJWT = async function () {
	const token = jwt.sign({ _id: this._id }, process.env.SECRET, {
		expiresIn: '24h'
	});
	// creates a token using json web token, the token expires in 24 hours, the secret comes from the .env file
	return token;
};

module.exports = mongoose.model('User', userSchema);
