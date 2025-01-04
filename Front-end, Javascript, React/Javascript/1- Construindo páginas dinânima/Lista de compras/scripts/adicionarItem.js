import { criarItemDaLista } from "./criarItemDaLista.js";

//Uma váriavel que não pode ser alterada futuramente
const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) { // O export serve para que essa função possa ser usada em outro arquivo js
    evento.preventDefault()

    const itemDaLista = criarItemDaLista(item.value); 
    listaDeCompras.appendChild(itemDaLista)
}