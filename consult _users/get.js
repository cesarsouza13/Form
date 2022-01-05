  //endereço url da minha API para ser acessada cm o axios
 

  async function fazget(){
    
    event.preventDefault();
   
    const url = 'http://localhost:3000'
    try{
        const response = await axios.get(url)  //acessando minha API no verbo get
        console.log(response)
        const data = response.data  //retornando todo o data da URL
        console.log('My data:', data)
    
        CreateTable(data)
        
        
    }
    catch (error){
      console.log(error)
    }
    
       }

       
 
function CreateTable(data){

  let tbody = document.getElementById('tbody')
  let amount = document.getElementById('amount').value   //pasando a quantidade de cadastro a serem exibidos
   

  if(amount > data.length){

    amount = data.length;
  }
  


  function CreatePage(PointI, PointO){
    
    tbody.innerText = '';// resetando o corpo da tabela a cada pesquisa

    if (amount < PointO){

      PointO = amount;
    }

  while (PointI < PointO){

    let tr = tbody.insertRow();//insertrow insere uma linha a cada loop
    let td_name = tr.insertCell();
    let td_email = tr.insertCell();
    let td_id = tr.insertCell();
    let td_createdAt = tr.insertCell();

    td_name.innerText = data[PointI].name; // atribuindo os valores do meu data de cada cadastro para as linhas da tabela
    td_email.innerText = data[PointI].email;
    td_id.innerText = data[PointI]._id;
    td_createdAt.innerText = PointI;
    PointI++;
  }

  }
 
  const state = { //estado default da paginação
    page: 1,
    perPage: 20, // quantidade de cadastros por pagina
    totalPage: Math.ceil(amount/20),// arredondo o total de paginas
  
  }
  const controls = {  //objeto das funcoes de funcionalidades da paginação
    next() {
      state.page++;
   
      if(state.page > state.totalPage){
        state.page = state.totalPage;      
    }},

    prev() {
      state.page--;

      if(state.page<= 0){
        state.page = 1;
      }},

      goto(page){
        state.page = page;
        
        if(page<1){
          page = 1;
        }

        if(page>state.page){
          state.page = state.totalPage;
        }},

      start(){
         state.page = 1;

      },

        // eventos para cada função

        createListeners(){  //adiciona aos elementos do html um evento
          paginate.get('.first').addEventListener("click", () =>{
            controls.goto(1)
           update()

          })  //busco o elemento no meu html, e vinculo ele a um evento a partir de um click

          paginate.get('.last').addEventListener('click', () =>{
            controls.goto(state.totalPage)
            update()
          })  //busco o elemento no meu html, e vinculo ele a um evento a partir de um click

          paginate.get('.next').addEventListener('click', () =>{
            controls.next()
            update()
          })

          paginate.get('.prev').addEventListener('click', () =>{
            controls.prev()
            update()
          })
        }
    
      }


 
  const paginate = { //objeto responsavel por realizar o DOM de quando interagir com os elementos da paginação
    get(element){
      return document.querySelector(element)
    }
  }
   

    

      
     function update(){
       console.log('Primeira pagina:',state.page)
       console.log('Ultima pagina:',state.totalPage)


       let PointI = state.page
       let PointO = state.page
       PointI--;
       
       PointO = PointO * 20 + PointI
       PointI = PointI * 20 + PointI 
       console.log('Pirmeiro cadastro da pagina:',PointI)
       console.log('Ultimo cadastro da pagina:',PointO)

      CreatePage(PointI,PointO);
     
     }


     const buttons = {    // objeto de funções responsável pelos botões de números das paginas
       create(number) {

        const button = document.createElement('div')
       
        button.innerHTML = number;

        paginate.get('.paginate .numbers').appendChild(button)
       },
       update() {
         
        
        const {maxLeft, maxRight} = buttons.MaxVisible()

        for(let page = maxLeft; page <= maxRight; page++){

          buttons.create(page)

        }

      
       

       },

       MaxVisible(){ //função responsável por revelar 1 pagina seguinte e anterior referente a atual
        
        let maxLeft = (state.page - Math.floor(3/2))
        let maxRight = (state.page + Math.floor(3/2))

        if (maxLeft < 1){
          maxLeft = 1
          maxRight = 3
        }

        if (maxRight > state.totalPage){
          maxLeft = state.totalPage - 2
          maxRight = state.totalPage

            if (maxLeft < 1){
              maxLeft = 1
            }
        }

        return {maxLeft, maxRight}
       }
    

     }

     function init() { //função responsável por ser o default da tabela
     
      update();
      controls.createListeners();
      
      

     }

init();
    }



