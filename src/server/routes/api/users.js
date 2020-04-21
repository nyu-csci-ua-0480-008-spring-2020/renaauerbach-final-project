const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.get('/join', (req, res, next) => {
	User.find({}, 'username')
		.then((data) => res.json(data))
		.catch(next);
});

router.post('/account', (req, res, next) => {
	if (req.body.username) {
		User.create(req.body)
			.then((data) => res.json(data))
			.catch(next);
	} else {
		res.json({
			error: 'The input field is empty',
		});
	}
});

router.delete('/account/:id', (req, res, next) => {
	User.findOneAndDelete({ _id: req.params.id })
		.then((data) => res.json(data))
		.catch(next);
});

module.exports = router;
