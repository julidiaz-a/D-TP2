// Componente ItemMovimiento
// Recibe props: movimiento (objeto) del formulario y onEliminar (función) de la app
export function ItemMovimiento({ movimiento, onEliminar }) {
  const esIngreso = movimiento.tipo === "INGRESO";

  return (
    <div className={`item-movimiento ${esIngreso ? "item-ingreso" : "item-egreso"}`}>
      <div className="item-info">
        <span className="item-categoria">{movimiento.categoria} · {movimiento.tipo}</span>
      </div>

      <div className="item-derecha">
        <span className="item-importe">
          {esIngreso ? "+" : "-"}${movimiento.importe.toFixed(2)}
        </span>
        <button className="boton-eliminar" onClick={() => onEliminar(movimiento.id)}>✕ </button>
      </div>
    </div>
  );
}
