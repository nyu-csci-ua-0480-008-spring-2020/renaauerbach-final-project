const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	title: { type: String, required: true },
	date: { type: Date, required: true },
	location: { type: String, required: true },
	text: { type: String, required: true },
	image: { type: String },
	users: { type: Array },
	createdAt: { type: Date, required: true },
});

eventSchema.methods = {
	// Add user to registered users
	registerUser: function (user) {
		this.users.put(user);
	},
};

module.exports = mongoose.model('Event', eventSchema);
