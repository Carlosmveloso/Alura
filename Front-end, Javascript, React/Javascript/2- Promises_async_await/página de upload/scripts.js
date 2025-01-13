const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload")

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

//Implementação de upload de arquivos
//Funcionalidade de upload de arquivos

function lerConteudoDoArquivo(arquivo) {
    //você está dizendo que está fazendo uma operação que pode levar algum tempo para ser concluída, usando o promise.
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();// O FileReader é resposável por ler o arquivo
        //Isso vai retorna quase tenha dado certo a leitura do aquivo .
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
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
        } catch (error) {
            console.error("Erro na leitura do arquivo");

        }
    }
})

//Implementar a funcionalidade de inserção de tags da aplicação.

const inputTags = document.getElementById("categoria");
const listaTags = document.getElementById("lista-tags");

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

//O keypress vao monitorar as teclas do teclado
inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        //Construindo a funcionalidade de verificar as tags
        if (tagTexto != "") {
            try {
                const tagExistente = await verificarTagsDisponiveis(tagTexto);
                if (tagExistente) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`
                    listaTags.appendChild(tagNova);//Estou dizendo que a listaTags é filha de tagNova.
                    inputTags.value = "";
                }else {
                    alert("Tag não foi encontrada");
                }
            } catch (error) {
                console.error(`Erro ao verificar a exitência da tag`);
                alert("Erro ao verificar a existência da tag. Verifique o console.")
            }
        }
    }
})

//Simulação de envio de dados para o back-end

async function publicarProjeto (nomeDoProjeto, descricaoDoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            
            if (deuCerto) {
                resolve("Projeto publicado com sucesso");
            } else {
                reject("Erro ao publicar o projeto");
            }
         }, 1000)//Representa 1 segundo de espera até a ação ser concluída
    })
}

//Ter acesso a tudo que foi inserido dentro do formulário

const botaoPublicar = document.querySelector(".botao-publicar");

botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();//Tira a configuração padrão do formulário, nesse caso a página não atualiza quando clicado.
    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    //Nessa parte do código está pegadno a lista de tags. Está pegando só o conteúdo do texto com o textContent. 
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Projeto publicado com sucesso!")
    } catch (error) {
        console.log("Deu errado", error)
        alert("Algo de inesperado ocorreu :(");
    }
})

//Função de limpar o formulário quando clicar em descartar

const botaoDescartar = document.querySelector(".botao-descartar");

botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const formulario = document.querySelector("form");
    formulario.reset();//vai resetar todos os campos do formulário

    imagemPrincipal.src = "./img/imagem1.png";
    nomeDaImagem.textContent = "image_projeto.png";

    listaTags.innerHTML = "";


})






