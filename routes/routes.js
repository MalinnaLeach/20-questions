
const express = require('express');
const router = express.Router();
const path = require('path');

const game_controller = require('../controllers/game.controller');
const question_controller = require('../controllers/question.controller');

router.post('/game-create', game_controller.gameCreate);
router.get('/game-view', game_controller.gameView);
router.post('/game-ask-question', question_controller.gameAskQuestion);
router.post('/game-answer-question', question_controller.gameAnswerQuestion);
module.exports = router;
