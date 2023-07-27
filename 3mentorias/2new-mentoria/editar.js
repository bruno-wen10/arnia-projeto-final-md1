let idDaMentoria = null;
const getForm = document.getElementById("idInputs");

const saveUrl = () => {
  const urlParameter = window.location.search;
  const idUrlParameterObj = new URLSearchParams(urlParameter);
  const id = idUrlParameterObj.get("id");

  return id;
};

const fetchDateInApi = async (id) => {
  const responseApi = await fetch(`http://localhost:4000/mentorias/${id}`);
  const returnApi = await responseApi.json();

  return returnApi;
};

const showDataMentors = (retornoApi) => {
  document.getElementById("tituloMentoria").value = retornoApi.titulo;
  document.getElementById("mentor").value = retornoApi.mentor;
  document.getElementById("idInputCheckbox").checked = retornoApi.status;
  console.log(retornoApi);
};

const editMentorship = async (id, TituloMentorStatus) => {
  try{
    const response = await fetch(`http://localhost:4000/mentorias/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify(TituloMentorStatus),
  });
  if (!response.ok) {
    throw new Error("Erro na edição da mentoria.");
  }

  const updatedMentoria = await response.json();
  console.log(updatedMentoria); // Verificar a resposta da API após a edição
  } catch (error){
    console.error(error)
  }
};

const loadEditData = async () => {
  //recuperar o id da url
  idDaMentoria = saveUrl();

  //2 - buscar a pessoa na api
  const fetchApi = await fetchDateInApi(idDaMentoria);

  //3- Povoar os Campos p/ edição
  showDataMentors(fetchApi);
};

getForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const tituloMentoria = getForm.elements["tituloMentoria"].value;
  const mentor = getForm.elements["mentor"].value;
  const status = getForm.elements["statusCheckbox"].checked;

  const TituloMentorStatus = {
    tituloMentoria,
    mentor,
    status,
  };

  idDaMentoria = saveUrl();

  await editMentorship(idDaMentoria, TituloMentorStatus);

  console.log(TituloMentorStatus);

  window.location = "../1mentorias/mentoria.html";
});

loadEditData();




//FUNÇÃO PARA BUSCAR MENTORES NA API

const showOptionMentores = async() => {
  try{
    const responseApi = await fetch(`http://localhost:4000/mentores`)

    const returnApi = await responseApi.json();
    console.log(returnApi);
    showMentorias(returnApi);
  } catch (error){
    console.log(error)
  }
}


//MOSTAR MENTORES NO HTML
const showMentorias = (param) => {
  const getIdSelect = document.getElementById('mentor');

  getIdSelect.innerHTML = ``;

  param.forEach((element) => {
    const mentorshipsHtml = `
        <option value="${element.nome}">${element.nome}</option>        
        `;
        getIdSelect.innerHTML += mentorshipsHtml;
    
  });
};
showOptionMentores()



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
