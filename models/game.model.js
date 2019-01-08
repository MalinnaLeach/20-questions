
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = require('./question.model')
const GuessSchema = require('./guess.model')

const arrayLimit = (val) => {
  return val.length <= 20;
}

const GameSchema = new Schema({
    name: { type: String, required: true, unique: true, max: 100 },
    questions: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }],
      validate: [arrayLimit, 'exceeds the limit of 20']
    },
    guesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guess'
    }]
});

module.exports = mongoose.model('Game', GameSchema);
