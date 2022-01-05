const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/noderest'); //conectando ao banco de dados
mongoose.Promise = global.Promise;

module.exports = mongoose;