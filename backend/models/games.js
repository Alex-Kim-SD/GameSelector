// Game.js
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: String,
  // maybe add more here, tbd
});

module.exports = mongoose.model('Game', GameSchema);
