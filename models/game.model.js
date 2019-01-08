
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;
const QuestionSchema = require('./question.model')
const GuessSchema = require('./guess.model')

const arrayLimit = (val) => {
  return val.length <= 20;
}

const oneQuestionAtATime = (val) => {
  if (val.length > 1) {
    return val.forEach((q) => {
      console.log(q)
      return Question.findOne({"_id": q}, (error, question) => {
        console.log(question)
        if (question.response === undefined) {
          console.log(question.response)
          return false
        }
      });
    });
    console.log("returning true")
    return true
  }
  console.log("returning true")
  return true
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

GameSchema.plugin(deepPopulate);

module.exports = mongoose.model('Game', GameSchema);
