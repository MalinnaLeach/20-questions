
const express = require('express');
const bodyParser = require('body-parser');
const game = require('./routes/game.route');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/games', game);

const port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
