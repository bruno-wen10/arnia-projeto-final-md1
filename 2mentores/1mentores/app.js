 // Função GET -> Busca os dados da API 
 const getAPI = async ()=>{
    try{
         const apiResponse = await fetch(`http://localhost:4000/mentores`)

         const retornoJson = await apiResponse.json()

         console.log(retornoJson)
         mostrarmentores(retornoJson) //Chamando a Função p/ mostar os mentores na pag HTML -- O paramentro passado está vindo da API pelo metodo GET

    }catch (error) {
        console.error(error)
    }
 }
 //Função Para Mostrar os dados da API na tela HTML
 const mostrarmentores = (param) =>{

    const tbody = document.getElementById('idTbody')

    param.forEach((item) => {

        const mentoresHtml = `

        <tr id="idTrTbody"  >
                      <td>${item.nome}</td>
                      <td>${item.email}</td>
                      <td>

                        <button id="idButtonEdit" class="editarButtom" onclick="editarMentor()">

                            <span class="material-symbols-outlined">edit</span>
                        </button>

                        <button class="buttomExcluir" onclick="excluirMentor()">
                            <span class="material-symbols-outlined">delete_forever</span>

                        </button>
                        
                      </td>

                    </tr>`
                    
                    tbody.innerHTML = tbody.innerHTML + mentoresHtml

    });

    
 }

getAPI() //Chamndo a função que busca na API os dados do OBJ




//Função P/ editar mentores -- Redireciona para pagina novo mentor
const  editarMentor = (id) =>{
    window.location = `../2new-mentores/index.html?id=${id}`
} 





//Função para Deletar mentor 
const excluirMentor = (excluirID) =>{
    
}



const novoMembro = () =>{
    window.location.href = '../2new-mentores/index.html'
}

const mudarPaginaMentorias = () =>{
    
}
const mudarPaginaTurmas = () =>{

}
const mudarPaginaAlunos = () =>{
    
}