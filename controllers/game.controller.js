
const Game = require('../models/game.model');
const Question = require('../models/question.model');

exports.gameCreate = (req, res) => {
  const game = new Game({
    name: req.body.name
  });
  game.save(error => {
      if (error) {
        res.send(error);
      }
      else {
        res.redirect('/game-view?name=' + req.body.name)
      }
    });
};

exports.gameView = (req, res) => {
  Game.findOne({ "name": req.query.name }, (error, docs) => {
    if (error) {
      res.send(error);
    }
    else {
      res.json({ docs })
    }
  })
}
