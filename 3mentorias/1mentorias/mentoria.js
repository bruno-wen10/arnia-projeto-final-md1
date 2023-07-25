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
    const statusClass =
      item.status === "Inativo" ? "statusInativo" : "statusAtivo";
    const mentorshipsHtml = `

        <tr id="idTrTbody" class = 'TrTbody'>
                      <td>${item.titulo}</td>
                      <td>${item.mentor}</td>
                      <td><span id='idStatus' class="${statusClass}">${item.status}</span></td>
                  
                      <td>

                        <button id="idButtonEdit" class="editarButtom" onclick="editarMentor(${item.id})">

                            <span class="material-symbols-outlined">edit</span>
                        </button>

                        <button class="buttomExcluir" onclick="excluirMentor(${item.id})">
                            <span class="material-symbols-outlined">delete_forever</span>

                        </button>
                        
                      </td>

                    </tr>`;

    getId.innerHTML += mentorshipsHtml; 
  });
};
getMentoriasApi();


// CÓDIGO DE REDIRECIONAMENTO DE PAGINA

const newMentoria = () =>{
  window.location = '../2new-mentoria/new-mentoria.html'
}

const mudarPaginaMentores = () =>{
  window.location = '../../2mentores/1mentores/index.html'
}
