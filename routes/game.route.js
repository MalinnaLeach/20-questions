
const express = require('express');
const router = express.Router();

const game_controller = require('../controllers/game.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', game_controller.test);
module.exports = router;
