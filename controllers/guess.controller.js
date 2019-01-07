
const Game = require('../models/game.model');
const Guess = require('../models/question.model');

exports.gameTryGuess = (req, res) => {
  const guess = new Guess({
    guessText: req.body.guessText
  });
  guess.save(error => {
    if (error) {
      res.send(error);
    } else {
      Game.findOneAndUpdate(
        { "name": req.body.name },
        { $push: { "guesses": guess } },
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

exports.gameAnswerGuess = (req, res) => {
  Guess.findOneAndUpdate(
    { "_id": req.body.guessId },
    { $set: { "guessCorrect": req.body.guessCorrect } },
    (error, docs) => {
    if (error) {
      res.json(error)
    } else {
      res.json({ docs });
    };
  });
};
