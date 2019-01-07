
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/20-questions')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', (callback) => {
   console.log("Connection succeeded.");
 });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('', routes);

const port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
