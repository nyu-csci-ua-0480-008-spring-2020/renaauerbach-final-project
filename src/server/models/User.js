const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
   username: { type: String, required: true },
   password: { type: String, required: true },
   email: { type: String, required: true },
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   location: { type: String },
   events: { type: Array },
});

module.exports = mongoose.model('User', userSchema);
