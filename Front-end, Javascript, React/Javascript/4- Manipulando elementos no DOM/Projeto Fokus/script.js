const html = document.querySelector("html");

const btnFoco = document.getElementsByClassName("app__card-button--foco");
const btnCurto = document.getElementsByClassName("app__card-button--curto");
const btnLongo = document.getElementsByClassName("app__card-button--longo");

btnFoco.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco")//"Elemento que vai ser alterado", "O que vai ser inserido"
});

btnCurto.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto")
});

btnLongo.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
})