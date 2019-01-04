
const express = require('express');
const bodyParser = require('body-parser');
const game = require('./routes/game.route');
const app = express();

const mongo = require('mongodb');
const monk = require('monk');
const db = monk('localhost:27017/20-questions');

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/games', game);

//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
