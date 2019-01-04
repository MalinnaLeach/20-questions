
const Game = require('../models/game.model');

exports.test = function (req, res) {
  const db = req.db;
  const collection = db.get('games');
  collection.find({},{},function(e,docs){
    res.json({docs});
  })
};
