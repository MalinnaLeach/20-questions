
const Game = require('../models/game.model');
const Question = require('../models/question.model');

exports.gameAskQuestion = (req, res) => {
  const question = new Question({
    questionText: req.body.questionText
  });
  question.save(error => {
    if (error) {
      res.send(error);
    } else {
      Game.findOneAndUpdate(
        { "name": req.body.name },
        { $push: { "questions": question } },
        (error, docs) => {
        if (error) {
          res.json(error)
        } else {
          res.json({ docs });
        };
      });
    };
  });
};

exports.gameAnswerQuestion = (req, res) => {
  Question.findOneAndUpdate(
    { "_id": req.body.questionId },
    { $set: { "response": req.body.response } },
    (error, docs) => {
    if (error) {
      res.json(error)
    } else {
      res.json({docs});
    };
  });
};
