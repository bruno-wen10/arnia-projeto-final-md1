// Função para novo cadastro -- Usando método POST para postar os novo mentor na API 
const cadastrarNovoMentor = async (nomeEmail) =>{
    try{

        const addApiPost = await fetch ('http://localhost:4000/mentores', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(nomeEmail) //transforma em uma string JSON
        
    })
    window.location = '../1mentores/index.html' // Depois que obj é postado e salvo, o cliente é redirecionado para pagina mentores 

    } catch (error) {
        console.error(error);
    }
}

const getFormulario = document.getElementById('idInputs') // Também usada para o put 


getFormulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    // elements // é utilizado em tag's form    
    const nome = getFormulario.elements['nome'].value
    const email = getFormulario.elements['email'].value

 // const com um objeto que guarda os valores dos INPUT's
    const nomeEmail = {
        nome,
        email
    }

    console.log(nomeEmail)

    // pasando por paramentro a variavel com o OBJ salvo com os valores dos inputs
    cadastrarNovoMentor(nomeEmail)   

})

const mentorId = null // variavel para armazenar o id do mentor que será editado

// O URLSearchParams permite analisar e manipular os parâmetros de uma URL.
// Nesse caso, capturamos o valor do parâmetro id com o get
const getParamURl = () => {
    console.log(window.location)
    const ParamentroString = window.location.search // search consulta/acessa o paramentro passado na url depois do ponto de interrogação "?" // Obtém a string de consulta da URL atual
    const params = new URLSearchParams(ParamentroString) // Cria uma instância de URLSearchParams
    mentorId = params.get('id')
}
const buscarMentor = async () => {
    try{
        const buscarmentorResponse = await fetch(`http://localhost:4000/mentorias/${mentorId}`)
        const transformaJson = await buscarmentorResponse.json()
        return transformaJson
    } catch (error){
        console.error(error)
    }
}
const editarMentorPut = async (mentor) =>{
    try{
        const apiEditResponse = await fetch(`http://localhost:4000/mentores/${mentorId}`, {
            method: 'PUT',
            headers:{
                'Accept': 'aplication/json, text/plain, */*',
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(mentor)            
        })
        window.location = '../1mentores/index.html'


    } catch (error){
        console.error(error)
    }
}
const voltarMentor = () =>{
    window.location = '../1mentores/index.html'
}
const dados = () =>{
    window.location = '../3mentorias/index.html'
}
const mudarPaginaMentores = () =>{
    window.location = '../1mentores/index.html'
}
const mudarPaginaMentorias = () =>{
    
}
const mudarPaginaTurmas = () =>{

}
const mudarPaginaAlunos = () =>{
    
}
