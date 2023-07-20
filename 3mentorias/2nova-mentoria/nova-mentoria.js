const getAPI = async ()=>{
    try{
         const apiResponse = await fetch(`http://localhost:4000/mentores`)

         const retornoJson = await apiResponse.json()

         console.log(retornoJson)
         mostrarmentores(retornoJson)

    }catch (error) {
        console.error(error)
    }
 }

 const mostrarmentores = (param) =>{

    const tbody = document.getElementById('idTbody')

    param.forEach((item) => {

        tbody.innerHTML = tbody.innerHTML + `

        <tr id="idTrTbody"  >
                      <td>${item.id}</td>
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
                    

    });

    
 }
getAPI()

const novoMenbro = () => {
    window.location = ''
}