const html = document.querySelector("html");

const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");

//Trocar de imagem
const imagemPrincipal = document.querySelector(".app__image");

//Trocar de texto
const textoPrincipal = document.querySelector(".app__title");

//Trocar de modo
const modeButton = document.querySelectorAll(".app__card-button");

//Pegando arquivos de audio
const botaoMusica = document.getElementById("alternar-musica");
const musicaAmbiente = new Audio("./sons/luna-rise-part-one.mp3");
musicaAmbiente.loop = true
const audioPlay = new Audio("./sons/play.wav");
const audioPausa = new Audio("./sons/pause.mp3");
const audioTempoFinalizado = new Audio("./sons/beep.mp3");

//Temporizador
const BotaoComecar = document.getElementById("start-pause");
let temporizador5 = 1500
let intervalo = null
const temporizador = document.getElementById("timer")

//Alterando o texto do botão começar
const botaoComecarOuPausarTemporizador = document.querySelector("#start-pause span");

//Alterando a imagem do botao começar
const imagemStatusbtn = document.querySelector("#button-icon");

//Criando o evento de tocar a música
//O evento change é usado para trabalhar com inputs do tipo checkbox
botaoMusica.addEventListener("change", () => {
    if (musicaAmbiente.paused) {
        musicaAmbiente.play()
    } else {
        musicaAmbiente.pause()
    }
})

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
//Aplicando a funcionaliadade de contagem regressiva
const contagemRegressiva = () => {
    if (temporizador5 <= 0) {
        //audioTempoFinalizado.play();//Audio que será executado quando o tempo acabar
        alert("Tempo finalizado");
        zerarContagem();
        return
    }
    temporizador5 -= 1
    tempoNaTela()
}

BotaoComecar.addEventListener("click", iniciarOuPausarContagem)

function iniciarOuPausarContagem () {
    if (intervalo) {
        audioPausa.play();//Audio que será executado quando a contagem pausar
        zerarContagem()
        return
    }
    audioPlay.play();//Audio que será executado quando o tempo começar
    intervalo = setInterval(contagemRegressiva, 1000)//Função ou método que vai ser executado, em quanto tempo para ser executado
    botaoComecarOuPausarTemporizador.textContent = "Pausar"
    imagemStatusbtn.src = "/imagens/pause.png";
}

function zerarContagem () {
    clearInterval(intervalo);
    botaoComecarOuPausarTemporizador.textContent = "Começar";
    imagemStatusbtn.src = "/imagens/play_arrow.png";
    intervalo = null
}

function tempoNaTela() {
    const tempo = temporizador5
    temporizador.innerHTML = `${tempo}`
}

tempoNaTela();


