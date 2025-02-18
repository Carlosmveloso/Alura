//Encontrar o botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");

const tarefas = [];

btnAdicionarTarefa.addEventListener("click", () => {
  formAdicionarTarefa.classList.toggle("hidden"); //O método toggle faz a altenância na class hidden.
});

formAdicionarTarefa.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //Criando um objeto
  const tarefa = {
    descricao: textarea.value,
  };
  tarefas.push(tarefa);//Mandando colocar a tarefa dentro da lista tarefas.
  localStorage.setItem("tarefas", tarefas)
});
