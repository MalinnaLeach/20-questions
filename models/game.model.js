
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = require('./question.model')
const GuessSchema = require('./guess.model')

const arrayLimit = (val) => {
  return val.length <= 20;
}

const oneQuestionAtATime = (val) => {
  const unansweredQustions = val.filter((q) => {
    q.response === undefined;
  })
  return unansweredQustions.length === 0;
}

const questionValidators = [
  { validator: arrayLimit, msg: 'You can\'t ask more than 20 questions.  You have lost the game' },
  { validator: oneQuestionAtATime, msg: 'You can only ask one question at a time.  Wait for your existing questions to have answers.' }
]

const GameSchema = new Schema({
    name: { type: String, required: true, unique: true, max: 100 },
    questions: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
      }],
      validate: questionValidators
    },
    guesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guess'
    }]
});

module.exports = mongoose.model('Game', GameSchema);
