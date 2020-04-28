const express = require('express');
const router = express.Router();

const Event = require('../models/Event');

// Get all events
router.get('/', (req, res) => {
	Event.find()
		.then(event => res.json(event))
		.catch(err => res.json({ error: err.message }));
});

// Register user for event
router.put('/:id/register', (req, res) => {
	console.log('HELLO');
	const user = { name: req.body.name, email: req.body.email };
	console.log('user:', user);
	console.log('req.params:', req.params);
	// Event.findByIdAndUpdate(req.params._id) {
	// 	$set:
	// }
	const event = Event.findById(req.body.id);

	event.registerUser(user);
	console.log('event.users', event.users);
	console.log('User registered successfully!');
});

module.exports = router;
