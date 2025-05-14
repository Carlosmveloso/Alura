import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    //* O map está pegando a array dos itens e retornar um array novo manipulado ex: (Ness caso tem uma lista de strings e vai retornar uma option.)
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
      >
        value={props.value}
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
