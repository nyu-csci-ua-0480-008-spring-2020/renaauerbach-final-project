const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
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
let dbconf;
// Check if the environment variable (NODE_ENV) is set to PRODUCTION
if (process.env.NODE_ENV === 'PRODUCTION') {
   // If so --> read configration from a file (using blocking file I/O)
   const data = fs.readFileSync(path.join(__dirname, '../../config.json'));
   // Parse the JSON configuration file and set the connection string appropriately
   const conf = JSON.parse(data);
   dbconf = conf.dbconf;
} else {
   // If NOT in PRODUCTION mode
   dbconf =
      'mongodb://teamCalebUser:teamCalebPass@127.0.0.1:27017/team_caleb?authSource=team_caleb';
}

mongoose.Promise = global.Promise;
mongoose
   .connect(dbconf, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log(`Database connected successfully`))
   .catch((err) => console.log('Connection error: ', err));

// Routes
app.use('/api/memories', memoryRouter);
app.use('/api/events', eventRouter);
app.use('/api/contact', messageRouter);

app.use((req, res, next) => {
   next();
});

app.get('/', (req, res) => {
   res.render('App');
});

app.listen(PORT, () => {
   console.log('Server running on port', PORT);
});
