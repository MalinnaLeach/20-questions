
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
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
      validate: [arrayLimit, 'You can\'t ask more than 20 questions.  You have lost the game']
    },
    guesses: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guess'
      }]
    }
});

GameSchema.plugin(deepPopulate);

module.exports = mongoose.model('Game', GameSchema);
