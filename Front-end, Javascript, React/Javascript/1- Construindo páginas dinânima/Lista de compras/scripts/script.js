const item = document.getElementById("input-item");
const botaosalvaritem = document.getElementById("adicionar-item");
const ListaDeCompras = document.getElementById("lista-de-compras");

botaosalvaritem.addEventListener("click", adicionarItem);//Ouvinte de eventos/ ("evento", função)

function adicionarItem(evento) {
    evento.preventDefault()
    
    const itemDaLista = document.createElement("li");//Estamos atribuindo a variável itemDaLista a criação da tag li.
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container")//Atribuindo uma classe para a div.

    const containerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText= item.value;//Aqui estou declarando que o valor que for digitado no input vai ser salvo aqui.
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";//Adicionando uma imagem pelo javascript.
    imagemRemover.alt = "Remover";//Comentário da imagem.

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    ListaDeCompras.appendChild(itemDaLista);

    itemDaLista.appendChild(containerItemLista);//Atribui que o containerItemLista seja uma tag filho da de itemLista.
}
