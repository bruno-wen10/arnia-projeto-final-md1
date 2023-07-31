// Função para novo cadastro -- Usando método POST para postar os novo mentor na API
const cadastrarNovoMentor = async (nomeEmail) => {
  try {
    const addApiPost = await fetch("http://localhost:4000/mentores", {
      method: "POST",
      headers: {
        'Accept': "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(nomeEmail), //transforma em uma string JSON
    });
    window.location = "../1mentores/index.html"; // Depois que obj é postado e salvo, o cliente é redirecionado para pagina mentores
  } catch (error) {
    console.error(error);
  }
};

//Obtém o formulário com o ID "idInputs" usando document.getElementById.
const getFormulario = document.getElementById("idInputs");

getFormulario.addEventListener("submit", (e) => {   //Adiciona um ouvinte de evento para o evento "submit" no formulário, ou seja, quando o formulário for enviado.
  e.preventDefault();                                   //para evitar que a página seja recarregada quando o formulário é enviado.

  // elements // é utilizado em tag's form
  const nome = getFormulario.elements["nome"].value;     //Obtém os valores dos campos de input do formulário usando 
  const email = getFormulario.elements["email"].value;

  // const com um objeto que guarda os valores dos INPUT's
  const nomeEmail = {
    nome,
    email,
  };

  console.log(nomeEmail);

  // pasando por paramentro a variavel com o OBJ salvo com os valores dos inputs
  cadastrarNovoMentor(nomeEmail);
});

// CÓDIGO DE REDIRECIONAMENTO DE PAGINA

const voltarMentor = () => {
  window.location = "../1mentores/index.html";
};
const mudarPaginaMentores = () => {
  window.location = "../1mentores/index.html";
};
const mudarPaginaMentorias = () => {
  window.location = "../../3mentorias/1mentorias/mentoria.html"
};
const mudarPaginaTurmas = () => {};
const mudarPaginaAlunos = () => {};
