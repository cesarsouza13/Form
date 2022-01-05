const cors = require('cors')// Permitir que minha rota fique publica
// estou declaranado a biblicoteca do express
const express = require('express');


const app = express(); // classe app criada usando o express

app.use(cors())
app.use(express.json());  //entende quando é enviado uma request para a API
require('./controllers/authControler')
(app);

app.listen(3000); //Porta que estou utilizando

console.log('server OK');



// iniciar rota: docker start noderest

//REQUISIÇÕES DA API
//GET : recebe dados de um resource
//POST : Envia dados ou informações para serem processadas por um resource
//PUT : Atualiza os dados de um resource
//DELETE : Deleta um resource

// http://localhost:3000/register  (register é o nome do resource/endpoint)


// Arquivo do verbo post para comunicar com o html
