import "./Botao.css";
// Essa forma de passar informação para o react não se restringe ao que foi designado, tudo que for escrito entre <Botao><Botao/> vai pertencer ao componente Botao
const Botao = (props) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
