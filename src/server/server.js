import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import Signup from '../Signup';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const db = require('./db.js');
const userRouter = require('./routes/user.routes.js');
// const eventRouter = require('./routes/event.routes.js');
const memoryRouter = require('./routes/memory.routes.js');

const User = require('../models/User');
const Event = require('../models/Event');
const Memory = require('../models/Memory');

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('../assets', express.static('assets'));
app.use('/api', userRouter);
// app.use('/api/events', eventRouter);
app.use('/api/memories', memoryRouter);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.use((req, res, next) => {
   next();
});

router.get('/', (req, res) => {
   res.render('App');
});

router.get('/news', (req, res) => {
   res.render('News', {});
});

router.get('/events', (req, res) => {
   Event.find({}, (events) => {
      res.render('Events', {
         events: events,
      });
   });
});

router.get('/events/register', (req, res) => {
   res.render('Register', {});
});

//TODO: EVENT REGISTRATION PAGE

router.get('/memories', (req, res) => {
   Memory.find({}, (memories) => {
      res.render('Memories', {
         memories: memories,
      });
   });
});

router.get('/memories/new', (req, res) => {
   res.render('newMemory', {});
});

router.post('/memories/new', (req, res) => {
   const newMemory = new Memory({
      title: req.body.title,
      author: {
         firstName: req.user.firstName,
         lastName: req.user.lastName,
      },
      text: req.body.text,
      image: req.body.image,
      createdAt: new Date().now(),
   });

   newMemory.save((err, memory) => {
      if (err) {
         res.render('newMemory', {
            error: 'There was an error with your submission. Please try again.',
         });
      } else {
         res.redirect('/memories');
      }
   });
});

router.get('/contact', (req, res) => {
   res.render('Contact', {});
});

router.get('/account', (req, res) => {
   User.find({ session: res.locals.user }, (err, result) => {
      res.render('Account', {});
   });
});

router.get('/join', (req, res) => {
   res.render('Signup');
});

router.post('/join', (req, res) => {
   console.log(req.body);
   const newUser = new User({
      username: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      location: req.body.location,
      events: [],
      memories: [],
   });

   newUser.save((err, user) => {
      if (err) {
         res.render('Signup', {
            error: 'There was an error with your account. Please try again.',
         });
      } else {
         res.redirect('/account');
      }
   });
});

router.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
