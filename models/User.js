const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });  // Enable timestamps

module.exports = mongoose.model('User', userSchema);
