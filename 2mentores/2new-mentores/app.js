// Função para novo cadastro -- Usando método POST para postar os novo mentor na API 
const cadastrarNovoMentor = async (nomeEmail) =>{
    try{

        const addApiPost = await fetch ('https://api-projeto-final-arnia.onrender.com/mentores', {
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




// CÓDIGO DE EDIÇÃO 



/*const FormularioEdit = document.getElementById('idInputs')

let mentorId = null 

const getParamURl = () => {
    console.log(window.location)
    const ParamentroString = window.location.search 
    const params = new URLSearchParams(ParamentroString) 
    const id = params.get('id')
}

const buscarMentor = async (id) => {
    try{
        const buscarmentorResponse = await fetch(`https://api-projeto-final-arnia.onrender.com/mentores/${id}`)
        const transformaJson = await buscarmentorResponse.json()
        return transformaJson
    } catch (error){
        console.error(error)
    }
}

const editarMentorPut = async (mentor) =>{
    try{
        const apiEditResponse = await fetch(`https://api-projeto-final-arnia.onrender.com/mentores/${mentorId}`, {
            method: 'PUT',
            headers:{
                'Accept': 'aplication/json, text/plain, */ /**',
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(mentor)            
        })
        window.location = '../1mentores/index.html'


    } catch (error){
        console.error(error)
    }
}

const carregarMentorFormulario = (mentor) =>{
    document.getElementById('nome').value = mentor.nome
    document.getElementById('email').value = mentor.email
}

const carregarDados = async () =>{
    getParamURl()
    const mentorEditado = await buscarMentor()
    carregarMentorFormulario(mentorEditado)

}

FormularioEdit.addEventListener('submit', (evento) =>{
    
    evento.preventDefault()
    const nomeEditado = FormularioEdit.elements['nome'].value
    const emailEditado = FormularioEdit.elements['email'].value

    const nomeEmailEditado = {
        nomeEditado,
        emailEditado
    }
      editarMentorPut(nomeEmailEditado)
 })*/



 // CÓDIGO DE REDIRECIONAMENTO DE PAGINA 

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
