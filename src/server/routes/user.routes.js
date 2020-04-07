'use strict';

import { Router } from 'express';
import bodyParser from 'body-parser';

import basicAuth from '../lib/basic-auth-middleware.js';
import User from '../models/User.js';

const authRouter = (module.exports = new Router());

authRouter.post('/signup', jsonParser, (req, res, next) => {
  User.create(req.body)
    .then(token => res.send(token))
    .catch(next);
});

authRouter.get('/login', basicAuth, (req, res, next) => {
  req.user
    .tokenCreate()
    .then(token => res.send(token))
    .catch(next);
});
