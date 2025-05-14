import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const times = [
    'Programação', 'Front-end', 'Data-Sciense', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
  ]

  return (
    //* Sempre criar componentes reutilizáveis
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaboarador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
