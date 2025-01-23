//Encontrar o botão de adicionar tarefa

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const formAdicionarTarefa = document.querySelector(".app__form-add-task")
const textarea = document.querySelector(".app__form-textarea");

const tarefas = [] 

btnAdicionarTarefa.addEventListener("click", () => {
    formAdicionarTarefa.classList.toggle("hidden")//O toggle tem como objetivo alternar o a propriedade de alguma instância. Como nesse exemplo se a classe não estiver ativa, ative, e caso estiver ativa, desative.
});

formAdicionarTarefa.addEventListener("submit", (evento) => { //O submit serve para escutar o envio do formulário
    evento.preventDefault();//Ele impede a ação padrão do navegador
    const tarefa = {descricao: textarea.value}//Isso é um objeto
    tarefas.push(tarefa);
    //Vamos usar a LocalStorage para armazenar as tarefas criadas pelo usuário
    localStorage.setItem("tarefas", JSON.stringify(tarefas));//O Tarefas entre "" é um nome criado por nós e o JSON é uma API que vai transformar tarefas em uma string que está se referenciando na const que criei lá em cima.
});