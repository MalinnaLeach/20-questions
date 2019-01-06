
const Game = require('../models/game.model');
const Guess = require('../models/question.model');

exports.gameTryGuess = function (req, res) {
  const guess = new Guess({
    guessText: req.body.guessText
  });
  guess.save(function(err) {
    if (error) {
      res.send(error);
    } else {
      Game.findOneAndUpdate(
        { "name": req.body.name },
        { $push: { "guesses": guess } },
        function(error, docs) {
        if (error) {
          res.json(error)
        } else {
          res.json({ docs });
        };
      });
    };
  });
};

exports.gameAnswerGuess = function (req, res) {
  Guess.findOneAndUpdate(
    { "_id": req.body.guessId },
    { $set: { "guessCorrect": req.body.guessCorrect } },
    function(error, docs) {
    if (error) {
      res.json(error)
    } else {
      res.json({ docs });
    };
  });
};
