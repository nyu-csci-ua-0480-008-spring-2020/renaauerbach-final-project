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
router.post('/:id/register', (req, res) => {
	const user = { name: req.body.name, email: req.body.email };
	console.log(user);

	Event.findByIdAndUpdate(
		{ _id: req.params.id, useFindAndModify: false },
		{ $push: { users: user } }
	)
		.then(event => {
			res.json({ success: true, event: event });
			console.log('User registered successfully!');
		})
		.catch(err => {
			res.status(400).json({ success: false, error: err });
			res.json({ error: err.message });
		});
});

module.exports = router;
