// Arquivo do verbo post para comunicar com o html

function fazpost(url, body){
console.log("Mybody = ", body)

 // verificando se esses dados ja contem no banco de dados acessando a rota get
async function fazget(){
  event.preventDefault();
  
  try{
      const response2 = await axios.get('http://localhost:3000/')  //acesando minha API no verbo get
      console.log(response2)
      const data = response2.data  //retornando todo o data da URL
      console.log('My data:', data)        
     
      for(let i = 0; i< data.length; i++){

        if(body.name === data[i].name){

          window.alert('Nome ja cadastrado')
          document.getElementById("name").value = '';
          document.getElementById("email").value = '';
          document.getElementById("password").value = '';
          i = data.length;
        }
        else if(body.email === data[i].email){

          window.alert('Email ja cadastrado')
          document.getElementById("name").value = '';
          document.getElementById("email").value = '';
          document.getElementById("password").value = '';
          i = data.length;
        }

      else if (body.email !== data[i].email && i === data.length - 1){

        user();
      }
      }
  }
  catch (error){console.log(error)}
  
};

           // enviando dados do usuario para a rota post
           async function user(){
            try {
              const response = await axios.post(url,body)// Acessando a rota post da minha API com axios
              
           console.log(response) ;
           validation(response);
              }
                catch (error){
              console.log(error)
              const alert = 'Preencha os campos para cadastro'
              window.alert(alert)

            }
          }
           fazget();

          }
 


 function cadastro(){

     event.preventDefault();
    const url = "http://localhost:3000/register"
    const name = document.getElementById("name").value // Recebendo os dados dos campos HTML
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    

    body = { name, email, password }

     fazpost(url, body)
}


function validation(response) { // função responsável por validar que o usuario foi cadastrado e resetar os campos

  const alert = 'Usuario cadastrado';

  if(response.status === 200){

  window.alert(alert);
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("password").value = '';
  }
 
}