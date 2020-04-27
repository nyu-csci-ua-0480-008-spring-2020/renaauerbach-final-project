const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   subject: { type: String, required: true },
   text: { type: String, required: true },
   createdAt: { type: Date, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
