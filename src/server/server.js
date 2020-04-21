const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
// const cors = require('cors');

const userRouter = require('./routes/api/users');
const eventRouter = require('./routes/api/events');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../../public')));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(cors());
// app.use('../assets', express.static('assets'));

// Connect to MongoDB
const db = require('./config/keys').MONGO_URI;
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Database connected successfully`))
   .catch((err) => console.log('Connection error: ', err));

mongoose.Promise = global.Promise;

Routes;
app.use('/api/users', userRouter);
app.use('/api/events', eventRouter);

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );
   next();
});

app.get('/', (req, res) => {
   res.render('App');
});

app.get('/news', (req, res) => {
   res.render('News', {});
});

app.get('/events', (req, res) => {
   Event.find({}, (events) => {
      res.render('Events', {
         events: events,
      });
   });
});

app.get('/events/register', (req, res) => {
   res.render('Register', {});
});

//TODO: EVENT REGISTRATION PAGE

app.get('/contact', (req, res) => {
   res.render('Contact', {});
});

app.get('/account', (req, res) => {
   User.find({ session: res.locals.user }, (err, result) => {
      res.render('Account', {});
   });
});

app.get('/join', (req, res) => {
   res.render('Signup');
});

app.post('/join', (req, res) => {
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

app.listen(PORT, () => {
   console.log('Server running on port', PORT);
});
