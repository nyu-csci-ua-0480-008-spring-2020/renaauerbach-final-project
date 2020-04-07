const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/hw06';

app.set('views', path.join(__dirname, '../src/views'));
app.use(express.static(path.join(__dirname, '../src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.Promise = global.Promise;
mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => console.log(`Database connected successfully`))
	.catch(err => console.log(err));

// app.use(app.router);
// routes.initialize(app);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use((req, res, next) => {
	res.send('Welcome to Express');
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
