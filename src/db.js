const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// DB Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    location: { type: String },
    events: { type: Array },
    memories: { type: Array },
});

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    users: { type: Array },
    image: { type: String },
    createdAt: { type: Date, required: true },
});

const MemorySchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: Object, required: true },
    text: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, required: true },
});

// Schema models
const User = mongoose.model('User', UserSchema);
const Event = mongoose.model('Event', EventSchema);
const Memory = mongoose.model('Memory', MemorySchema);

module.exports = {
    User: User,
    Event: Event,
    Memory: Memory,
};
