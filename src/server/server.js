const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
// const cors = require('cors');

const memoryRouter = require('./routes/api/memories');
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
app.use('/api/memories', memoryRouter);
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

app.get('/memories', (req, res) => {
   Memories.find({}, (memories) => {
      res.render('Memories', {
         memories: memories,
      });
   });
});

app.get('/memories/new', (req, res) => {
   res.render('NewMemory', {});
});

app.get('/contact', (req, res) => {
   res.render('Contact', {});
});

app.listen(PORT, () => {
   console.log('Server running on port', PORT);
});
