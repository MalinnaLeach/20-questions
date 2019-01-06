
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuessSchema = new Schema({
  guessText: { type: String, required: true, max: 100 },
  guessCorrect: { type: Boolean }
});

module.exports = mongoose.model('Guess', GuessSchema);
