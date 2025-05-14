import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  // Array dos times que podem ser escolhidos
  const times = [
    "Programação",
    "Front-end",
    "Data-Sciense",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  // Estamos usando hook para conseguir colocar um estado dentro de uma função.
  // Estamos usando o useState que é um hook que gera dois objetos um para me mostrar o valor em si e outro para alterar esse valor.
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  // Conferir a submissão do código
  const onSave = (evento) => {
    // Previne o evento padrão do navegador
    evento.preventDefault();
    console.log("Form foi submetido => ", nome, cargo, imagem, time);
  };

  return (
    // Sempre criar componentes reutilizáveis
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaboarador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
