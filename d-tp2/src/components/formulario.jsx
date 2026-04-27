import { useState } from "react";


// Componente: Formulario
// Recibe la prop: onAgregar
export function Formulario({ onAgregar }) {
  const [importe, setImporte] = useState("");
  const [tipo, setTipo] = useState("INGRESO");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");

  function handleCargar() {
    // Validaciones
    if (importe === "" || Number(importe) <= 0) {
      setError("El importe debe ser mayor a cero.");
      return;
    }

    // Si pasó las validaciones, Limpiamos el error
    setError("");

    // Creamos el objeto movimiento
    const nuevoMovimiento = {
      id: Date.now(),
      importe: Number(importe),
      tipo: tipo,
      categoria: categoria,
    };

    // Llamamos a la función del promp
    onAgregar(nuevoMovimiento);

    // Limpiamos el formulario
    setImporte("");
    setTipo("");
    setCategoria("");
  }

  return (
    <div className="panel">
      <h2 className="panel-titulo">Nuevo movimiento</h2>

      <div className="campo">
        <label>Importe ($)</label>
        <input
          type="number"
          value={importe}
          onChange={(e) => setImporte(e.target.value)}
          placeholder="0.00"
          min="0"
        />
      </div>

      <div className="campo">
        <label>Tipo</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="INGRESO">↑ Ingreso</option>
          <option value="EGRESO">↓ Egreso</option>
        </select>
      </div>

      <div className="campo">
        <label>Categoría</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Comida">Comida</option>
          <option value="Transporte">Transporte</option>
          <option value="Ocio">Ocio</option>
          <option value="Salud">Salud</option>
          <option value="Hogar">Hogar</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      <button className="boton-cargar" onClick={handleCargar}>Cargar</button>
    </div>
  );
}
