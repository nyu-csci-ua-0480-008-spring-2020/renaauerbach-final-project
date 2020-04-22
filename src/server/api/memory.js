import { Router } from 'express';
import bodyParser from 'body-parser';

const express = require('express');
const router = express.Router();

router.post('/memories/new', MemoryCtrl.createMemory);
router.put('/memories/:id', MemoryCtrl.updateMemory);
router.delete('/memories/:id', MemoryCtrl.deleteMemory);
router.get('/memories/:id', MemoryCtrl.getMemoryById);
router.get('/memories', MemoryCtrl.getMemories);

module.exports = router;
