// /backend/user.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
});

module.exports = mongoose.model('User', UserSchema);
