import Banner from "./componentes/Banner"; //* Já importa automaticamente a função Banner(), quando eu escrevi <banner/>
import Formulario from "./componentes/Formulario";
//* Quando eu coloco o nome do meu arquivo se chama "index.js" basta colocar o nome da pasta

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
