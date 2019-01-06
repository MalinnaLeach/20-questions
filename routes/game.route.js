
const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/game.controller');
const question_controller = require('../controllers/question.controller');

router.get('/test', game_controller.test);
router.post('/game_create', game_controller.gameCreate);
router.post('/game_ask_question', question_controller.gameAskQuestion)
router.post('/game_answer_question', question_controller.gameAnswerQuestion)
module.exports = router;
