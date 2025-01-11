const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload")

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

//Implementação de upload de arquivos
//Funcionalidade de upload de arquivos

function lerConteudoDoArquivo (arquivo) {
    //você está dizendo que está fazendo uma operação que pode levar algum tempo para ser concluída, usando o promise.
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();// O FileReader é resposável por ler o arquivo
        //Isso vai retorna quase tenha dado certo a leitura do aquivo .
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        }
        //Vai retornar caso tenha dado errado a leitura do aquivo
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p")

//Como lidar com funções assíncronas
inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];//Vai pergar o arquivo que foi enviado

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch(error) {
            console.error("Erro na leitura do arquivo");
            
        }
    }
})

//Implementar a funcionalidade de inserção de tags da aplicação.

const inputTags = document.getElementById("categoria");
const listaTags = document.getElementById("lista-tags");
//O keypress vao monitorar as teclas do teclado
inputTags.addEventListener("keypress", (evento) => {
    if(evento.key === "Enter") {
    evento.preventDefault();
    const tagTexto = inputTags.value.trim();
    if (tagTexto != "") {
        const tagNova = document.createElement("li");
        tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
        listaTags.appendChild(tagNova);//Estou dizendo que a listaTags é filha de tagNova.
        inputTags.value = "";
    }
  } 
})

//Remover uma tag já existente 

listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagRemover = evento.target.parentElement;
        listaTags.removeChild(tagRemover);
    }
})

//Limitar as tags que podem ser usadas.

const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-Stack", "Back-end", "HTML", "CSS", "Javascript", "React"];

async function verificarTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000)
    })
}