const express = require('express');
const router = express.Router();

const Events = require('../../models/Event');

router.get('/events', (req, res, next) => {
   Events.find({}, 'title')
      .then((data) => res.json(data))
      .catch(next);
});

router.post('/events', (req, res, next) => {
   if (req.body.title) {
      Events.create(req.body)
         .then((data) => res.json(data))
         .catch(next);
   } else {
      res.json({
         error: 'The input field is empty',
      });
   }
});

router.delete('/events/:id', (req, res, next) => {
   Events.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
});

module.exports = router;
