//Encontrar o botão de adicionar tarefa

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");

const tarefas = [];

function criarElementoTarefa(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg>
        <svg class="app__section-task-icon-status" width="24" height="24"         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>
`;

  const p = document.createElement("p");
  p.textContent = tarefa.descricao;

  const button = document.createElement("button");
  const imageButton = document.createElement("img");
  imageButton.setAttribute("src", "/imagens/edit.png");

  button.append(imageButton);
  li.append(svg);
  li.append(p);
  li.append(button);
}

btnAdicionarTarefa.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden"); //O toggle tem como objetivo alternar o a propriedade de alguma instância. Como nesse exemplo se a classe não estiver ativa, ative, e caso estiver ativa, desative.
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  //O submit serve para escutar o envio do formulário
  evento.preventDefault(); //Ele impede a ação padrão do navegador
  const tarefa = { descricao: textarea.value }; //Isso é um objeto
  tarefas.push(tarefa);
  //Vamos usar a LocalStorage para armazenar as tarefas criadas pelo usuário
  localStorage.setItem("tarefas", JSON.stringify(tarefas)); //O Tarefas entre "" é um nome criado por nós e o JSON é uma API que vai transformar tarefas em uma string que está se referenciando na const que criei lá em cima.
});
