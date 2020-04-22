const express = require('express');
const router = express.Router();

const Events = require('../models/Event');

router.get('/events', (req, res, next) => {
   Events.find({}, 'title')
      .then((data) => res.json(data))
      .catch(next);
});

router.post('/events/register', (req, res, next) => {
   if (req.body.email) {
      Events.create(req.body)
         .then((data) => res.json(data))
         .catch(next);
   } else {
      res.json({
         error: 'The input field is empty',
      });
   }
});

module.exports = router;
