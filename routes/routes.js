
const express = require('express');
const router = express.Router();
const path = require('path');

const game_controller = require('../controllers/game.controller');
const question_controller = require('../controllers/question.controller');

router.get('/', (req, res) => res.sendFile(path.resolve('views/gameStart.html')));
router.get('/test', game_controller.test);
router.post('/game_create', game_controller.gameCreate);
router.get('/game_join', game_controller.gameJoin);
router.post('/game_ask_question', question_controller.gameAskQuestion);
router.post('/game_answer_question', question_controller.gameAnswerQuestion);
module.exports = router;
