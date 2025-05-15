import "./CampoTexto.css";

//* Estado do componente
const CampoTexto = (props) => {
  //* Está pegando oque foi digitado no input
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  //* O '.target significa que só vai pegar no input que está selecionado e não de todos.'

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        //*  O 'onChange' significa que a cada alteração ele vai rodar a função 'aoDigitado'.
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default CampoTexto;
