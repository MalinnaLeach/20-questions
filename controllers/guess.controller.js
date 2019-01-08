
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
          res.redirect('/game-view?name=' + req.body.name)
        };
      });
    };
  });
};

exports.gameAnswerGuess = (req, res) => {
  Guess.findOneAndUpdate(
    { "_id": req.query.guessId },
    { $set: { "guessCorrect": req.query.guessCorrect } },
    (error, docs) => {
    if (error) {
      res.json(error)
    } else {
      res.redirect('/game-view?name=' + req.body.name)
    };
  });
};
