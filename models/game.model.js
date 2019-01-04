
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
    code: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Game', GameSchema);
