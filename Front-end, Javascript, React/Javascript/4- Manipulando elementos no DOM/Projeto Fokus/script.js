const html = document.querySelector("html");

const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");

const imagemPrincipal = document.querySelector(".app__image");

const textoPrincipal = document.querySelector(".app__title")

const modeButton = document.querySelectorAll(".app__card-button")

//Alterando o cor de fundo, imagem e texto de acordo com o botão
btnFoco.addEventListener("click", () => {
    alterarModo("foco")
    btnFoco.classList.add("active")
});

btnCurto.addEventListener("click", () => {
    alterarModo("descanso-curto")
    btnCurto.classList.add("active")
});

btnLongo.addEventListener("click", () => {
    alterarModo("descanso-longo")
    btnLongo.classList.add("active")
});

function alterarModo (contexto) {
    html.setAttribute("data-contexto", contexto)
    imagemPrincipal.setAttribute("src", `/imagens/${contexto}.png`)
    modeButton.forEach(function (contexto) {
        contexto.classList.remove("active")
    });
    //Alterando o texto de acordo com o modo que a pessoas esconlher
    switch (contexto) {
        case "foco":
            textoPrincipal.innerHTML = `
            <h1 class="app__title">
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            </h1>`
            break;
        case "descanso-curto":
            textoPrincipal.innerHTML = `<h1 class="app__title">
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            </h1>`
            break;
        case "descanso-longo":
            textoPrincipal.innerHTML = `
            <h1 class="app__title">
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            </h1>`
        default:
            break;
    }
}



