
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
      Game.findOne({ "name": req.body.name })
        .deepPopulate('questions guesses')
        .exec((error, game) => {
          if (error) {
            res.send(error);
          } else {
            game.questions.push(question)
            game.save(error => {
              if (error) {
                res.send(error);
              } else {
                res.redirect('game-view?name=' + req.body.name)
              }
            });
          }
        });
      }
  });
}

exports.gameAnswerQuestion = (req, res) => {
  Question.findOneAndUpdate(
    { "_id": req.body.questionId },
    { $set: { "response": req.body.response } },
    error => {
    if (error) {
      res.json(error)
    } else {
      res.redirect('game-view?name=' + req.body.name)
    };
  });
};
