const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const memoryRouter = require('./api/memory');
const eventRouter = require('./api/event');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../../public')));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
// app.use('../assets', express.static('assets'));

// Connect to MongoDB
const db = require('./config/keys').MONGO_URI;
mongoose.Promise = global.Promise;
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Database connected successfully`))
   .catch((err) => console.log('Connection error: ', err));

// Routes
app.use('/api/memory', memoryRouter);
app.use('/api/event', eventRouter);

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

app.listen(PORT, () => {
   console.log('Server running on port', PORT);
});
