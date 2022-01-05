// definindo as rotas nesse arquivo
const mongoose = require('mongoose'); //importando os metodos do mongoose
const express = require('express');
const User = require('../models/User');
const bodyParser = require('body-parser');

const router = express.Router(); //definindo rota através do express

//rota do get
router.get('/', async (req, res ) => {
 
  console.log(req.data)
 
try{
  const data = await User.find()  // metodo do mongoose que  retorna para mim todos os usuarios do banco de dados do mongo db
  console.log('get chamado')
  return res.send(data)
  
}
  catch(eror){

    return res.status(400).send({ error: 'Resource failed'});
  }});

// rota do post
router.post('/register', async (req, res) => {  //post: vou enviar os dados do usuario para a resource
  console.log('post chamado')
  console.log(req.body)

  try {
    const {name, email , password} = req.body;   // associando as variaisveis recebidas do body da requisicao
    console.log({name, email, password})
      const user = await User.create({name, email, password}); // todos os parametros da requisição sao passados/ await espera compilaçao
     
      return res.send({ user }); // estou retornando e enviando os dados do usuario
      
    }
    
    catch (error){
        return res.status(400).send({ error: 'Resgistration failed'}); // retorna e envia erro 400 caso registro de usuario falhar
    }});

//rota delete
router.delete('/register/:_id', async (req,res) => {
  console.log('delete chamado')

  try {
  const { _id } = req.params;
  const user = await User.findByIdAndDelete({ _id });
  
  return res.json(user);

  }

  catch (error){
    return res.status(400).send({ error: 'Delete failed'}); // retorna e envia erro 400 caso registro de usuario falhar
}});

//rota do put

router.put('/register/:_id/:data/:select', async (req, res) => {

console.log('put chamado')

try { 
  const {_id} = req.params;
  JSON.stringify({data} = req.params)
  JSON.stringify({select} = req.params)
console.log(req.params)


if(select === 'Name'){                  
  console.log('teste')
  const user = await User.findByIdAndUpdate({_id}, {$set: {name: data}});
  return res.json(user);
}

   else if(select === 'Email'){
    const user = await User.findByIdAndUpdate({_id}, {$set: {email: data}});
    return res.json(user);

   }

   else if(select === 'Password'){
    const user = await User.findByIdAndUpdate({_id}, {$set: {password: data}});
    return res.json(user);

   }

}

catch (error){
  return res.status(400).send({ error: 'Put failed'}); // retorna e envia erro 400 caso registro de usuario falhar
}});



module.exports = app => app.use('/', router); 