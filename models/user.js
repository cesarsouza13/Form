// estou criando o modelo padrão do meu banco de dados
const mongoose = require('../database');

const UserSchema = new mongoose.Schema({  // Schema sao os mapeamentos dos campos dentro do banco de dados
name: {
    type: String,
    required: true,
},

email: {
    type: String,
    required: true,
},

password: {
    type: String,
    required: true, // exige campo obrigatorio
    //select: false, // nao demonstra a string
},

createdAt: {
    type: Date,
    default: Date.now,
},

});

const User = mongoose.model('User', UserSchema); // objeto Usuario do mongoose

module.exports = User;   // exporto o usuario criado