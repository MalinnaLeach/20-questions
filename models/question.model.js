
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  questionText: { type: String, required: true, max: 100 },
  response: { type: Boolean }
});

module.exports = mongoose.model('Question', QuestionSchema);
