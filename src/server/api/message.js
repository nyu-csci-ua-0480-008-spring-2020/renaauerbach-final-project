const express = require('express');
const router = express.Router();

const Message = require('../models/Message');

// Send a message
router.post('/', (req, res) => {
   const newMessage = new Message(req.body);
   console.log(newMessage);
   newMessage.save((err, msg) => {
      if (err) {
         res.status(400).json({ success: false, error: err });
      } else {
         res.json({ success: true, id: msg.id });
         console.log('Message sent successfully!');
      }
   });
});

module.exports = router;
