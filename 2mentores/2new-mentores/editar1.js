let mentorId = null
const FormularioEdit = document.getElementById('idInputs')

const recuperarIdPessoa = () =>{
    const parametroUrl = window.location.search
    const parametrosObjeto = new URLSearchParams(parametroUrl)
    const id = parametrosObjeto.get("id")
    
    return id
}

const buscarApi = async (id) => {
    const apiResponse = await fetch (`http://localhost:4000/mentores/${id}`)
    const returnPessoa = await apiResponse.json()

    return returnPessoa

}

const carregarDadosNoFormulario = (idPessoa) =>{
    document.getElementById('nome').value =  idPessoa.nome
    document.getElementById('email').value = idPessoa.email

}

const editarPessoaApi = async (id, pessoa) => {
    try{
        await fetch(`http://localhost:4000/mentores/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content': 'aplication/json'
        },
        body: JSON.stringify(pessoa)
    })
    
    } catch(error){
        console.error(error)
    }
    

}

const carregarDadosEditar = ()=> {
//recuperar o id da url
mentorId = recuperarIdPessoa()

//2 - buscar a pessoa na api
const buscarPessoaApi = buscarApi(mentorId)

//3- Povoar os Campos p/ edição
carregarDadosNoFormulario(buscarPessoaApi)

}

FormularioEdit.addEventListener('submit', async (e)=>{
    e.preventDefault()
    
    //1 recuperar os dados do formulario
    const nome = FormularioEdit.elements['nome'].value
    const email = FormularioEdit.elements['email'].value

    // 2 - montar o obj pessoa 
    const nomeEmail = {
        nome, //por ter o mesmo nome 
        email
    }

    // 3- enviar dados para API
    await editarPessoaApi(mentorId, pessoa)

    //4- redirecionar para tela de Listagem de mentores
    window.location = '../1mentores/index.html' 


})
carregarDados()

