//Uma váriavel que não pode ser alterada futuramente
const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
//Uma variável que pode ser alterada futuramente
let contador = 0;
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = document.createElement("li");//Estamos atribuindo a variável itemDaLista a criação da tag li.
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");//Atribuindo uma classe para a div.

    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");//Criando o input.
    checkboxInput.type = "checkbox";//Definindo qual tipo é o input.
    checkboxInput.classList.add("input-checkbox");//Definindo o id dinâmico de uma tag.
    checkboxInput.id = "checkbox-" + contador++;//Quando for classificar um atributo não usa ().

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);//Outra maneira de definir um atributo = ("tipo", valor).

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none"; 
            listaDeCompras.appendChild(itemDaLista);
        }
    });//.addEventListener("evento", ação);

    const checkboxCustomizado = document.createElement("div");//Criando o checkbox customizado.
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);//Não se coloca "" para variáveis
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item.value;//Aqui estou declarando que o valor que for digitado no input vai ser salvo aqui.
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";//Adicionando uma imagem pelo javascript.
    imagemRemover.alt = "Remover";//Comentário da imagem.

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);//Atribui que o containerItemLista seja uma tag filho da de itemLista.
    listaDeCompras.appendChild(itemDaLista)
}