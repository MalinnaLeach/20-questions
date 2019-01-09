
const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/game.controller');
const question_controller = require('../controllers/question.controller');
const guess_controller = require('../controllers/guess.controller');

router.post('/game-create', game_controller.gameCreate);
router.get('/game-view', game_controller.gameView);
router.post('/game-ask-question', question_controller.gameAskQuestion);
router.post('/game-answer-question', question_controller.gameAnswerQuestion);
router.post('/game-try-guess', guess_controller.gameTryGuess);
router.post('/game-answer-guess', guess_controller.gameAnswerGuess);
module.exports = router;
