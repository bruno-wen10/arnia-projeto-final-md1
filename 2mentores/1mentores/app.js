// Função GET -> Busca os dados da API
const getAPI = async () => {
  try {
    const apiResponse = await fetch(`https://api-projeto-final-arnia.onrender.com/mentores`);

    const retornoJson = await apiResponse.json();

    console.log(retornoJson);
    mostrarmentores(retornoJson); //Chamando a Função p/ mostar os mentores na pag HTML -- O paramentro passado está vindo da API pelo metodo GET
  } catch (error) {
    console.error(error);
  }
};

//Função Para Mostrar os dados da API na tela HTML
const mostrarmentores = (param) => {
  const tbody = document.getElementById("idTbody");
  tbody.innerHTML = "";

  param.forEach((item) => {
    const mentoresHtml = `

        <tr id="idTrTbody" >
                      <td>${item.nome}</td>
                      <td>${item.email}</td>
                      <td>

                        <button id="idButtonEdit" class="editarButtom" onclick="editarMentor(${item.id})">

                            <span class="material-symbols-outlined">edit</span>
                        </button>

                        <button class="buttomExcluir" onclick="excluirMentor(${item.id})">
                            <span class="material-symbols-outlined">delete_forever</span>

                        </button>
                        
                      </td>

                    </tr>`;

    tbody.innerHTML = tbody.innerHTML + mentoresHtml;
  });
};

getAPI(); //Chamndo a função que busca na API os dados do OBJ

//Função P/ editar mentores -- Redireciona para pagina novo mentor
const editarMentor = (id) => {
  window.location = `../2new-mentores/editar.html?id=${id}`;
};

//Função para Deletar mentor
const excluirMentor = async (excluirMentorId) => {
  try {
    await fetch(`https://api-projeto-final-arnia.onrender.com/mentores/${excluirMentorId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    getAPI();
  } catch (error) {
    console.error(error);
  }
};

//Função Para Pesquisar Mentores
const idEnter = document.getElementById("idEnter");
const idInputPesquisar = document.getElementById("idInputPesquisar");

idInputPesquisar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const valorPesquisar = idInputPesquisar.value;
    realizarPesquisa(valorPesquisar);
  }
});

idEnter.addEventListener("click", () => {
  const valorPesquisar = idInputPesquisar.value;
  realizarPesquisa(valorPesquisar);
});

const realizarPesquisa = async (termoPesquisar) => {
  try {
    const apiResponse = await fetch(
      `https://api-projeto-final-arnia.onrender.com/mentores?q=${termoPesquisar}`
    );
    const retornopesquisaApi = await apiResponse.json();
    mostrarmentores(retornopesquisaApi);
  } catch (error) {
    console.error(error);
  }
};

const novoMembro = () => {
  window.location = "../2new-mentores/index.html";
};

const mudarPaginaMentorias = () => {
  window.location = "../../3mentorias/1mentorias/mentoria.html";
};
