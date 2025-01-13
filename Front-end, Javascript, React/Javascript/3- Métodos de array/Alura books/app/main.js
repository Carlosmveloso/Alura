let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(){
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    console.log(livros);
}
