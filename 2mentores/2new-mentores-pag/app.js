const cadastrarNovoMentor = async (nomeEmail) =>{
    try{
        const addApiPost = await fetch ('http://localhost:4000/mentores', {
            method: 'POST',
            heardes: {
                'Accept': 'application/json, text/plain, *//*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nomeEmail) //transforma em uma string JSON
        
    })
     window.location = '../3dados-mentor-pag/index.html' //Volta para pag Mentores
    } catch (error) {
        console.error(error);
    }
}

const getFormulario = document.getElementById('idInputs')


getFormulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nome = getFormulario.elements['nome'].value
    const email = getFormulario.elements['email'].value

    const nomeEmail = {
        nome,
        email
    }
    cadastrarNovoMentor(nomeEmail)   

})

/*const salvar = (e) =>{
    e.preventDefault()

    const nome = getFormulario.elements['nome'].value
    const email = getFormulario.elements['email'].value

    const nomeEmail = {
        nome,
        email
    }
    cadastrarNovoMentor(nomeEmail)
}*/

const voltarMentor = () =>{
    window.location = '../1mentores-pag/index.html'
}
const dados = () =>{
    window.location = '../3dados-mentor-pag/index.html'
}
const mudarPaginaMentores = () =>{
    window.location = '../1mentores-pag/index.html'
}
const mudarPaginaMentorias = () =>{
    window.location = '../3dados-mentor-pag/index.html'
}
