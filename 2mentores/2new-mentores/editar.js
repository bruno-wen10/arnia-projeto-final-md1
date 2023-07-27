// CÓDIGO DE EDIÇÃO
let mentorId = null;
const FormularioEdit = document.getElementById("idInputs");

const recuperarIdNome = () => {
  const parametroUrl = window.location.search;
  const parametrosObjeto = new URLSearchParams(parametroUrl);
  const id = parametrosObjeto.get("id");

  return id;
};

const buscarApi = async (id) => {
  const apiResponse = await fetch(`http://localhost:4000/mentores/${id}`);
  const returnPessoa = await apiResponse.json();

  return returnPessoa;
};

const carregarDadosNoFormulario = (idNome) => {
  document.getElementById("nome").value = idNome.nome;
  document.getElementById("email").value = idNome.email;
  console.log(idNome);
};

const editarPessoaApi = async (id, nomeEmail) => {
  await fetch(`http://localhost:4000/mentores/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify(nomeEmail),
  });
};

const carregarDadosEditar = async () => {
  //recuperar o id da url
  mentorId = recuperarIdNome();

  //2 - buscar a pessoa na api
  const buscarNomeApi = await buscarApi(mentorId);

  //3- Povoar os Campos p/ edição
  carregarDadosNoFormulario(buscarNomeApi);
};

FormularioEdit.addEventListener("submit", async (e) => {
  e.preventDefault();

  //1 recuperar os dados do formulario
  const nome = FormularioEdit.elements["nome"].value;
  const email = FormularioEdit.elements["email"].value;

  // 2 - montar o obj pessoa
  const nomeEmail = {
    nome, //por ter o mesmo nome
    email,
  };

  // 3- enviar dados para API

  await editarPessoaApi(mentorId, nomeEmail);

  console.log(nomeEmail);

  //4- redirecionar para tela de Listagem de mentores
  window.location = "../1mentores/index.html";
});

carregarDadosEditar();

// CÓDIGO DE REDIRECIONAMENTO DE PAGINA

const voltarMentor = () => {
  window.location = "../1mentores/index.html";
};
const dados = () => {
  window.location = "../3mentorias/index.html";
};
const mudarPaginaMentores = () => {
  window.location = "../1mentores/index.html";
};
const mudarPaginaMentorias = () => {
  window.location = "../../3mentorias/1mentorias/mentoria.html"
};



