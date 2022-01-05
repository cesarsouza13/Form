const url2 = 'http://localhost:3000/register/'


async function fazput(){
  
    event.preventDefault();
    const _id = document.getElementById("_id").value;
    const select = document.getElementById("select").value;
    const data = document.getElementById("new").value;
    const url = url2 +  _id + "/" + data + "/" + select
   
    
    console.log(_id)
    console.log(select)
    console.log(url)
try {
   const response = await axios.put(url)
   console.log(response)
   validation(response)
}



catch (error){
    console.log(error)
    const alert =  'Usuario inexistente ou campos incompletos'
      window.alert(alert);
      document.getElementById("_id").value = '';
      document.getElementById("select").value = '';
      document.getElementById("new").value = '';
  }}


  function validation(response) {

    
    
  
    if(response.status === 200){
      const alert =  'Usuario alterado'
    window.alert(alert);
    document.getElementById("_id").value = '';
    document.getElementById("select").value = '';
    document.getElementById("new").value = '';
    }
   
  }
