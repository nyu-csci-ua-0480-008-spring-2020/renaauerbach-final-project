const express = require('express');
const router = express.Router();

const Memory = require('../models/Memory');

// Get all memories
router.get('/', (req, res) => {
	Memory.find()
		.then((memories) => res.json(memories))
		.catch((err) => res.json({ error: err.message }));
});

// Create new memory
router.post('/', (req, res) => {
	const newMemory = new Memory(req.body);
	newMemory.save((err, memory) => {
		if (err) {
			res.status(400).json({ success: false, error: err });
		} else {
			res.json({ success: true, id: memory.id });
			console.log('Memory added successfully!');
			res.redirect('/memories');
		}
	});
});

// Edit memory
router.post('/:id', (req, res) => {
	const memory = new Memory(req.body);
	Memory.findByIdAndReplace(req.params.id, memory, (err) => {
		if (err) {
			res.status(400).json({
				success: false,
				error: err,
			});
		} else {
			res.json({
				success: true,
			});
			console.log('Memory edited successfully!');
			res.redirect('/memories');
		}
	});
});

module.exports = router;
