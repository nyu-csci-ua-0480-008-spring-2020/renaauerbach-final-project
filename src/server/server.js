const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');

const userRouter = require('./routes/api/users');
// const eventRouter = require('./routes/api/events');
// const memoryRouter = require('./routes/api/memories');

const User = require('../models/User');
const Event = require('../models/Event');
const Memory = require('../models/Memory');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../../public')));
// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors());
// app.use('../assets', express.static('assets'));

// Connect to MongoDB
const db = require('./config/keys').mongoURI;
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Database connected successfully`))
   .catch((err) => console.log('Connection error: ', err));

// Passport config and middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/users', userRouter);
// app.use('/api/events', eventRouter);
app.use('/api/memories', memoryRouter);

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );
   if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
      return res.status(200).json({});
   }
   next();
});

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.listen(PORT, () => {
   console.log('Server running on port', PORT);
});

// router.get('/', (req, res) => {
//    res.render('App');
// });
//
// router.get('/news', (req, res) => {
//    res.render('News', {});
// });
//
// router.get('/events', (req, res) => {
//    Event.find({}, (events) => {
//       res.render('Events', {
//          events: events,
//       });
//    });
// });
//
// router.get('/events/register', (req, res) => {
//    res.render('Register', {});
// });
//
// //TODO: EVENT REGISTRATION PAGE
//
// router.get('/memories', (req, res) => {
//    Memory.find({}, (memories) => {
//       res.render('Memories', {
//          memories: memories,
//       });
//    });
// });
//
// router.get('/memories/new', (req, res) => {
//    res.render('newMemory', {});
// });
//
// router.post('/memories/new', (req, res) => {
//    const newMemory = new Memory({
//       title: req.body.title,
//       author: {
//          firstName: req.user.firstName,
//          lastName: req.user.lastName,
//       },
//       text: req.body.text,
//       image: req.body.image,
//       createdAt: new Date().now(),
//    });
//
//    newMemory.save((err, memory) => {
//       if (err) {
//          res.render('newMemory', {
//             error: 'There was an error with your submission. Please try again.',
//          });
//       } else {
//          res.redirect('/memories');
//       }
//    });
// });
//
// router.get('/contact', (req, res) => {
//    res.render('Contact', {});
// });
//
// router.get('/account', (req, res) => {
//    User.find({ session: res.locals.user }, (err, result) => {
//       res.render('Account', {});
//    });
// });
//
// router.get('/join', (req, res) => {
//    res.render('Signup');
// });
//
// router.post('/join', (req, res) => {
//    console.log(req.body);
//    const newUser = new User({
//       username: req.body.email,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email,
//       location: req.body.location,
//       events: [],
//       memories: [],
//    });
//
//    newUser.save((err, user) => {
//       if (err) {
//          res.render('Signup', {
//             error: 'There was an error with your account. Please try again.',
//          });
//       } else {
//          res.redirect('/account');
//       }
//    });
// });
//
// router.listen(PORT, () => {
//    console.log(`Server running on port ${PORT}`);
// });
