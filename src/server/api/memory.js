const express = require('express');
const router = express.Router();

const Memory = require('../models/Memory');

// Get all memories
router.get('/', (req, res) => {
	Memory.find()
		.sort({ createdAt: -1 })
		.then((memories) => res.json(memories))
		.catch((err) => res.json({ error: err.message }));
});

// Create new memory
router.post('/', (req, res) => {
	const newMemory = new Memory(req.body);
	console.log('req', newMemory);
	newMemory.save((err, memory) => {
		if (err) {
			res.status(400).json({ success: false, error: err });
		} else {
			res.json({ success: true, id: memory.id });
			console.log('Memory added successfully!');
		}
	});
});

// Delete a memory
router.delete('/:id', (req, res) => {
	Memory.findByIdAndRemove({ _id: req.params.id, useFindAndModify: false })
		.then((data) => {
			res.json({ success: true });
			console.log('Memory deleted successfully!');
		})
		.catch((err) => {
			res.status(400).json({
				success: false,
				error: err,
			});
		});
});

module.exports = router;
