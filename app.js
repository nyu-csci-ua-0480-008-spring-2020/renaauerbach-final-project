const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const path = require('path');
require('./db.js');
const app = express();

const User = mongoose.model('User');
const Event = mongoose.model('Event');
const Memory = mongoose.model('Memory');

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		secret: 'secret reviewer',
		saveUninitialized: false,
		resave: true,
		cookie: {},
	})
);

app.use((req, res, next) => {
	res.locals.user = req.sessionID;
	res.locals.authenticated = !req.sessionID.anonymous;

	next();
});

app.get('/', (req, res) => {
	res.render('home', {
		defaultLayout: 'layout',
	});
});

app.get('/news', (req, res) => {
	res.render('news', {
		layout: 'layout',
	});
});

app.get('/events', (req, res) => {
	Event.find({}, events => {
		res.render('events', {
			layout: 'layout',
			events: events,
		});
	});
});

app.get('/events/register', (req, res) => {
	res.render('register', {
		layout: 'layout',
	});
});

//TODO: EVENT REGISTRATION PAGE

app.get('/memories', (req, res) => {
	Memory.find({}, memories => {
		res.render('memories', {
			layout: 'layout',
			memories: memories,
		});
	});
});

app.get('/memories/new', (req, res) => {
	res.render('newMemory', {
		layout: 'layout',
	});
});

app.post('/memories/new', (req, res) => {
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
				layout: 'layout',
				error:
					'There was an error with your submission. Please try again.',
			});
		} else {
			res.redirect('/memories');
		}
	});
});

app.get('/contact', (req, res) => {
	res.render('contact', {
		layout: 'layout',
	});
});

app.get('/account', (req, res) => {
	User.find({ session: res.locals.user }, (err, result) => {
		res.render('account', {
			layout: 'layout',
		});
	});
});

app.get('/signup', (req, res) => {
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
			res.render('signup', {
				layout: 'layout',
				error:
					'There was an error with your account. Please try again.',
			});
		} else {
			res.redirect('/account');
		}
	});
});

app.listen(3000);
