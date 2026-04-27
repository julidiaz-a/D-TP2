import { useState } from "react";
import { Formulario } from "./components/formulario";

function App() {
  //Movimientos
  const [movimientos, setMovimientos] = useState([]); //Array

  function agregarMovimiento(nuevoMovimiento) {
    setMovimientos([nuevoMovimiento, ...movimientos]);
  }

  return (
    <div className="app-container">
      <h1 className="app-titulo">Gestor de Gastos Personales</h1>
      <div className="app-grilla">
        <div>
          <Formulario onAgregar={agregarMovimiento} />
        </div>
      </div>
    </div>
  );
}

export default App;
