
const Game = require('../models/game.model');
const Question = require('../models/question.model');

exports.gameAskQuestion = function (req, res) {
  const question = new Question({
    questionText: req.body.questionText
  });
  question.save(function(error) {
    if (error) {
      res.send(error);
    } else {
      Game.findOneAndUpdate(
        { "name": req.body.name },
        { $push: { "questions": question } },
        function(error, docs) {
        if (error) {
          res.json(error)
        } else {
          res.json({docs});
        };
      });
    };
  });
};

exports.gameAnswerQuestion = function (req, res) {
  Question.findOneAndUpdate(
    { "_id": req.body.questionId },
    { $set: { "response": req.body.response } },
    function(error, docs) {
    if (error) {
      res.json(error)
    } else {
      res.json({docs});
    };
  });
};
