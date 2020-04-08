const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/events', (req, res, next) => {
   //this will return all the data, exposing only the id and action field to the client
   Event.find({}, 'action')
      .then((data) => res.json(data))
      .catch(next);
});

router.post('/events', (req, res, next) => {
   if (req.body.action) {
      Event.create(req.body)
         .then((data) => res.json(data))
         .catch(next);
   } else {
      res.json({
         error: 'The input field is empty',
      });
   }
});

router.delete('/events/:id', (req, res, next) => {
   Event.findOneAndDelete({ _id: req.params.id })
      .then((data) => res.json(data))
      .catch(next);
});

module.exports = router;
