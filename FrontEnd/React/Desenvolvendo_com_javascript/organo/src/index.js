import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//* Aqui é o ponto de start do projeto

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Ajuda com futuros erros
  //* Aqui redenrizou o nosso arquivo App.js onde vai ser executado o primeiro componente e logo em seguida os outros.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
