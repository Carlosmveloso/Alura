import { adicionarItem } from "./scripts/adicionarItem.js";// Serve para pegar uma função de outro arquivo js.

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);