const express = require('express');
const router = express.Router();

const Event = require('../models/Event');

// Get all events
router.get('/', (req, res) => {
   Event.find()
      .then((event) => res.json(event))
      .catch((err) => res.json({ error: err.message }));
});

// Register user for event
router.post('/register', (req, res) => {
   const user = { name: req.body.name, email: req.body.email };
   const event = Event.findById(req.body.id);

   event.registerUser(user);
});

module.exports = router;
