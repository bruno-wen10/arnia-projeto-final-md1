// Função GET -> Busca os dados da API
const getMentoriasApi = async () => {
  try {
    const apiResponse = await fetch(`http://localhost:4000/mentorias`);
    const retornoApi = await apiResponse.json();

    console.log(retornoApi);
    showMentorias(retornoApi);
  } catch (error) {
    console.error(error);
  }
};

//Função Para Mostrar os dados da API na tela HTML
const showMentorias = (param) => {
  const getId = document.getElementById("idTbody");

  getId.innerHTML = ``;

  param.forEach((item) => {
    const statusClass = item.status ? "statusAtivo" : "statusInativo";

    const status = item.status ? "Ativo" : "Inativo";

    const mentorshipsHtml = `

        <tr id="idTrTbody" class = 'TrTbody'>
                      <td>${item.titulo}</td>
                      <td>${item.mentor}</td>
                      <td><span id='idStatus' class="${statusClass}">${status}</span></td>
                  
                      <td>

                        <button id="idButtonEdit" class="editarButtom" onclick="editarMentoria(${item.id})">

                            <span class="material-symbols-outlined">edit</span>
                        </button>

                        <button class="buttomExcluir" onclick="excluirMentoria(${item.id})">
                            <span class="material-symbols-outlined">delete_forever</span>

                        </button>
                        
                      </td>

                    </tr>`;

    getId.innerHTML += mentorshipsHtml;
  });
};
getMentoriasApi();

// FUNÇÃO DE DIRECIONAMENTO PARA DOCUMENTO JS DE EDIÇÃO
const editarMentoria = (id) => {
  window.location = `../2new-mentoria/editar.html?id=${id}`;
};

//FUNÇÃO PARA DELETAR MENTOR
const excluirMentoria = async (excluirMentoria) => {
  try {
    await fetch(`http://localhost:4000/mentorias/${excluirMentoria}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    getMentoriasApi();
  } catch (error) {
    console.error(error);
  }
};

//FUNÇÃO PARA PESQUISAR MENTORES
const idInputPesquisar = document.getElementById("idInputPesquisar");
const idEnter = document.getElementById("idEnter");

idInputPesquisar.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const valueSearch = idInputPesquisar.value;
    doResearch(valueSearch);
  }
});

idEnter.addEventListener("click", () => {
  const valueSearch = idInputPesquisar.value;
  doResearch(valueSearch);
});
const doResearch = async (termoPesquisar) => {
  try {
    const apiResponse = await fetch(
      `http://localhost:4000/mentorias?q=${termoPesquisar}`
    );
    const retornopesquisaApi = await apiResponse.json();
    showMentorias(retornopesquisaApi);
  } catch (error) {
    console.error(error);
  }
};

// CÓDIGO DE REDIRECIONAMENTO DE PAGINA

const newMentoria = () => {
  window.location = "../2new-mentoria/new-mentoria.html";
};

const mudarPaginaMentores = () => {
  window.location = "../../2mentores/1mentores/index.html";
};
