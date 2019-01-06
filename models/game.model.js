
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = require('./question.model')
const GuessSchema = require('./guess.model')

let GameSchema = new Schema({
    name: { type: String, required: true, unique: true, max: 100 },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    guesses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guess'
    }]
});

module.exports = mongoose.model('Game', GameSchema);
