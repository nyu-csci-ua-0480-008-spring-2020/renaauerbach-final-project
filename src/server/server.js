const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const memoryRouter = require('./api/memory');
const eventRouter = require('./api/event');
const messageRouter = require('./api/message');

const app = express();
const PORT = process.env.PORT || 3001;

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../../public')));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// Connect to MongoDB
const db = require('./config/keys').MONGO_URI;
mongoose.Promise = global.Promise;
mongoose
   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Database connected successfully`))
   .catch((err) => console.log('Connection error: ', err));

// Routes
app.use('/api/memories', memoryRouter);
app.use('/api/events', eventRouter);
app.use('/api/contact', messageRouter);

app.use((req, res, next) => {
   // res.header('Access-Control-Allow-Origin', '*');
   // res.header(
   //    'Access-Control-Allow-Headers',
   //    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   // );
   next();
});

app.get('/', (req, res) => {
   res.render('App');
});

app.listen(PORT, () => {
   console.log('Server running on port', PORT);
});
