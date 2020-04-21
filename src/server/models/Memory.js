const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: Object, required: true },
  text: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model('Memory', memorySchema);
