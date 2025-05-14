import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const times = [
    'Programação', 'Front-end', 'Data-Sciense', 'Devops', 'UX e Design', 'Mobile', 'Inovação e Gestão'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaboarador</h2>
        //* Sempre criar componentes reutilizáveis
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}/>
      </form>
    </section>
  );
};

export default Formulario;
