const idClick = document.getElementById('idClick')

idClick.addEventListener('enter', () =>{
    const ValorPesquisar = document.getElementById('idInputPesquisar').value

    realizarPesquisa(ValorPesquisar)
})

const realizarPesquisa = async (termoPesquisar) =>{
    try{
        const apiResponse = await fetch (`http://localhost:4000/mentores?q=${termoPesquisar}`)

    const retornopesquisaApi = await apiResponse.json()

    exibirPesquisaHtml (retornopesquisaApi)
    } catch (error){
        console.error(error)
    }

}

const exibirPesquisaHtml = (retornoDaPesquisaApi) => {
    const tbody = document.getElementById('idTbody')
    if (mentores.length === 0) {

        retornoDaPesquisaApi.innerHTML = '<p>Nenhum mentor encontrado.</p>';
        return;
    }

    retornoDaPesquisaApi.forEach((item) => {

        const mentoresHtml = `

        <tr id="idTrTbody"  >
                      <td>${item.nome}</td>
                      <td>${item.email}</td>
                      <td>

                        <button id="idButtonEdit" class="editarButtom" onclick="editarMentor(${item.id})">

                            <span class="material-symbols-outlined">edit</span>
                        </button>

                        <button class="buttomExcluir" onclick="excluirMentor(${item.id})">
                            <span class="material-symbols-outlined">delete_forever</span>

                        </button>
                        
                      </td>

                    </tr>`
                    
                    tbody.innerHTML = tbody.innerHTML + mentoresHtml

    });

    
 }


