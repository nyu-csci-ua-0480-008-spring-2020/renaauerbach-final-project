const express = require('express');
const router = express.Router();

const Memory = require('../models/Memory');

router.get('/memories', (req, res, next) => {
   Memory.find({}, (data) => {
      res.json(data).catch(next);
   });
});

router.post('/memories', (req, res, next) => {
   if (req.body.title) {
      Memory.create(req.body)
         .then((data) => res.json(data))
         .catch(next);
   } else {
      res.json({
         error: 'The input field is empty',
      });
   }
});

module.exports = router;
