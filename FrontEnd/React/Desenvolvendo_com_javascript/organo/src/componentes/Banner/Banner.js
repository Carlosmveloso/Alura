import "./Banner.css"

function Banner() {
  return (
    //* JSX é como ele ler oque escrevemos no react daí o react transcreve para o DOM.
    <header className="banner">
      <img
        src="/imagens/banner.png"
        alt="Banner principal da página do organo"
      />
    </header>
  );
}

export default Banner;
