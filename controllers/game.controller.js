
const Game = require('../models/game.model');
const Question = require('../models/question.model');

exports.test = function (req, res) {
  Question.find({},{},function(e,docs){
    res.json({ docs });
  })
};

exports.gameCreate = (req, res) => {
  const game = new Game({
    name: req.body.name
  });
  game.save(error => {
      if (error) {
        res.send(error);
      }
      else {
        res.send('Game created successfully')
      }
    });
};

exports.gameJoin = (req, res) => {
  Game.findOne({ "name": req.query.name }, (error, docs) => {
    if (error) {
      res.send(error);
    }
    else {
      res.json({ docs })
    }
  })
}
