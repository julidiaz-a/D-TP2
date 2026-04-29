import { useState } from "react";
import { Formulario } from "./components/formulario";
import { ListaMovimientos } from "./components/ListaMovimientos";

//CSS
import "./App.css";

function App() {
  //Movimientos
  const [movimientos, setMovimientos] = useState([]); //Array

  function agregarMovimiento(nuevoMovimiento) {
    setMovimientos([nuevoMovimiento, ...movimientos]);
  }

  function eliminarMovimiento(id) {
    setMovimientos(movimientos.filter((m) => m.id !== id));
  }


  return (
    <div className="app-container">
      <h1 className="app-titulo">Gestor de Gastos Personales</h1>
      <div className="app-grilla">
        <div>
          <Formulario onAgregar={agregarMovimiento} />
          <ListaMovimientos
            movimientos={movimientos}
            onEliminar={eliminarMovimiento}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
