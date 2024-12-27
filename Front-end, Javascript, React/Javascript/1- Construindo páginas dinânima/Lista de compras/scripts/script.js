const item = document.getElementById("input-item");
const botaosalvaritem = document.getElementById("adicionar-item");

botaosalvaritem.addEventListener("click", adicionarItem);//Ouvinte de eventos/ ("evento", função)

function adicionarItem(evento) {
    evento.preventDefault()
    console.log("Entrei na função");
    
}
