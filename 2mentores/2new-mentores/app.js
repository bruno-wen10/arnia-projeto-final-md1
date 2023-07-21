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
