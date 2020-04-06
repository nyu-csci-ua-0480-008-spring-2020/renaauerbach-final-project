const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  users: { type: Array },
  image: { type: String },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model('Event', eventSchema);
