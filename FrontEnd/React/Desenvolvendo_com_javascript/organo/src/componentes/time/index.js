import "./Time.css";

const Time = (props) => {
  const fundoDoCard = { backgroundColor: props.corSecundaria };

  return (
    <section className="time" style={fundoDoCard}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Time;
