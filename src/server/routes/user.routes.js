import { Router } from 'express';
import bodyParser from 'body-parser';

const express = require('express');
const UserCtrl = require('../controllers/user.ctrl.js');
const router = express.Router();

router.post('/join', UserCtrl.createUser);
router.put('/event/register/:id', UserCtrl.registerUser);
router.put('/event/register/:id', UserCtrl.unregisterUser);
router.put('/memory/new/:id', UserCtrl.addMemoryToUser);
router.delete('/account/:id', UserCtrl.deleteUser);
router.put('/account/:id', UserCtrl.updateUser);
router.get('/account/:id', UserCtrl.getUserById);

module.exports = router;
// const authRouter = (module.exports = new Router());
//
// authRouter.post('/join', jsonParser, (req, res, next) => {
//    User.create(req.body)
//       .then((token) => res.send(token))
//       .catch(next);
// });
//
// authRouter.get('/login', basicAuth, (req, res, next) => {
//    req.user
//       .tokenCreate()
//       .then((token) => res.send(token))
//       .catch(next);
// });
