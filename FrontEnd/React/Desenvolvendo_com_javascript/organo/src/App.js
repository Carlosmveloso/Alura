import { useState } from "react";
import Banner from "./componentes/Banner"; //* Já importa automaticamente a função Banner(), quando eu escrevi <banner/>
import Formulario from "./componentes/Formulario";
//* Quando eu coloco o nome do meu arquivo se chama "index.js" basta colocar o nome da pasta

//* Quando no "Return" você usar () refere-se ao JSX e quando usa {} refere-se a um objeto.
function App() {
  const [colaboradores, setColaboradores] = useState([]);

  //* Os '...'significa que vai espalhar todos oc colaboradores nessa nova array.
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
    </div>
  );
}

export default App;
