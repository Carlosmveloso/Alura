import "./Botao.css";
//* Dessa forma de passar insformção para o react não se restringe ao que foi designado, tudo que for escrito entre <Botao><Botao/> vai pertencer ao componente Botao
const Botao = (props) => {
  return <button className="botao">{props.children}</button>;
};

export default Botao;
