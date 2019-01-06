
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/20-questions")

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback) {
   console.log("Connection succeeded.");
 });

const Game = require('../models/game.model');
const Question = require('../models/question.model');

exports.test = function (req, res) {
  Question.find({},{},function(e,docs){
    res.json({docs});
  })
};

exports.gameCreate = function (req, res) {
  const game = new Game({
    name: req.body.name
  });
  game.save(function(error) {
      if (error) {
        res.send(error);
      }
      else {
        res.send('Game created successfully')
      }
    });
};
