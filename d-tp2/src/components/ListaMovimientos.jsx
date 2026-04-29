import { ItemMovimiento } from "./itemMovimiento";
// Componente : ListaMovimientos
// Recibe props: movimientos (array) y onEliminar (función)
export function ListaMovimientos({ movimientos, onEliminar }) {
  if (movimientos.length === 0) {
    return (
      <div className="panel">
        <h2 className="panel-titulo">Historial</h2>
        <p className="sin-datos">Aún no hay movimientos cargados.</p>
      </div>
    );
  }

  return (
    <div className="panel">
      <h2 className="panel-titulo">Historial</h2>
      <div className="lista">
        {movimientos.map((mov) => (
          <ItemMovimiento
            key={mov.id}
            movimiento={mov}
            onEliminar={onEliminar}
          />
        ))}
      </div>
    </div>
  );
}