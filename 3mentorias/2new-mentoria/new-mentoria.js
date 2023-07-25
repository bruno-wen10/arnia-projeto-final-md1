const registerMentoring = async (objApiMentorias) => {
  try {
    const addApiPost = await fetch(`http://localhost:4000/mentorias`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objApiMentorias), // o parametro passado será o objeto da captura do formulário
    });
    window.location = "../1mentorias/mentoria.html";
  } catch (error) {
    console.error(error);
  }
};

const getForm = document.getElementById("idInputs");

getForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = getForm.elements["tituloMentoria"].value;
  const mentor = getForm.elements["mentor"].value;
  const status = getForm.elements['statusCheckbox'].value;

  const objApiMentorias = {
    titulo,
    mentor,
    status,
  };
  console.log(objApiMentorias);

  registerMentoring(objApiMentorias);
});

// Função GET -> Busca os dados da API

const showOptionMentores = async () => {
  try {
    const apiResponse = await fetch("http://localhost:4000/mentores");

    const returnApi = await apiResponse.json();
    console.log(returnApi);
    showMentorias(returnApi);
  } catch (error) {
    console.error(error);
  }
};

//FUNÇÃO PARA MOSTAR OPÇÕES DE MENTORES - METODO GET

const showMentorias = (param) =>{
  const getIdSelect = document.getElementById('mentor')
  getIdSelect.innerHTML = ``
  
  param.forEach((element) => {

    const optionMentorHtml = `  
    <option value="${element.nome}">${element.nome}</option>
    `
    getIdSelect.innerHTML += optionMentorHtml   
  });
  
}
showOptionMentores ()

// CÓDIGO DE REDIRECIONAMENTO DE PAGINA

const voltarMentoria = () => {
  window.location = "../1mentorias/mentoria.html";
};

const mudarPaginaMentores = () => {
  window.location = "../../2mentores/1mentores/index.html";
};
const mudarPaginaMentorias = () => {
  window.location = "../1mentorias/mentoria.html";
};
