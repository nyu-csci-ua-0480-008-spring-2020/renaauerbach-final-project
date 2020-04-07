const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const User = require('../models/User');
const Event = require('../models/Event');
const Memory = require('../models/Memory');

router.get('/events', (req, res, next) => {
  //this will return all the data, exposing only the id and action field to the client
  Event.find({}, 'action')
    .then(data => res.json(data))
    .catch(next);
});

router.post('/events', (req, res, next) => {
  if (req.body.action) {
    Event.create(req.body)
      .then(data => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/events/:id', (req, res, next) => {
  Event.findOneAndDelete({ _id: req.params.id })
    .then(data => res.json(data))
    .catch(next);
});

module.exports = router;
// router.get('/', (req, res) => {
//   res.render('home', {
//     defaultLayout: 'layout',
//   });
// });
//
// router.get('/news', (req, res) => {
//   res.render('news', {
//     layout: 'layout',
//   });
// });
//
// router.get('/events', (req, res) => {
//   Event.find({}, events => {
//     res.render('events', {
//       layout: 'layout',
//       events: events,
//     });
//   });
// });
//
// router.get('/events/register', (req, res) => {
//   res.render('register', {
//     layout: 'layout',
//   });
// });
//
// //TODO: EVENT REGISTRATION PAGE
//
// router.get('/memories', (req, res) => {
//   Memory.find({}, memories => {
//     res.render('memories', {
//       layout: 'layout',
//       memories: memories,
//     });
//   });
// });
//
// router.get('/memories/new', (req, res) => {
//   res.render('newMemory', {
//     layout: 'layout',
//   });
// });
//
// router.post('/memories/new', (req, res) => {
//   const newMemory = new Memory({
//     title: req.body.title,
//     author: {
//       firstName: req.user.firstName,
//       lastName: req.user.lastName,
//     },
//     text: req.body.text,
//     image: req.body.image,
//     createdAt: new Date().now(),
//   });
//
//   newMemory.save((err, memory) => {
//     if (err) {
//       res.render('newMemory', {
//         layout: 'layout',
//         error: 'There was an error with your submission. Please try again.',
//       });
//     } else {
//       res.redirect('/memories');
//     }
//   });
// });
//
// router.get('/contact', (req, res) => {
//   res.render('contact', {
//     layout: 'layout',
//   });
// });
//
// router.get('/account', (req, res) => {
//   User.find({ session: res.locals.user }, (err, result) => {
//     res.render('account', {
//       layout: 'layout',
//     });
//   });
// });
//
// router.get('/signup', (req, res) => {
//   const newUser = new User({
//     username: req.body.email,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     location: req.body.location,
//     events: [],
//     memories: [],
//   });
//
//   newUser.save((err, user) => {
//     if (err) {
//       res.render('signup', {
//         layout: 'layout',
//         error: 'There was an error with your account. Please try again.',
//       });
//     } else {
//       res.redirect('/account');
//     }
//   });
// });

module.exports = router;
