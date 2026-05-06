import { useState } from "react";

export function Balance({ movimientos }) {
  // Calculamos los totales
  const totalIngresos = movimientos
    .filter((m) => m.tipo === "INGRESO")
    .reduce((suma, m) => suma + m.importe, 0);

  const totalEgresos = movimientos
    .filter((m) => m.tipo === "EGRESO")
    .reduce((suma, m) => suma + m.importe, 0);

  const balanceTotal = totalIngresos - totalEgresos;

  const [limitePresupuesto, setLimitePresupuesto] = useState ("");

  const limite = parseFloat(limitePresupuesto);

  const superaLimite = !isNaN(limite) && limite > 0 && totalEgresos > limite;
  return (
    <div className="panel">
      <h2 className="panel-titulo">Balance</h2>

      {/* Balance centrado */}
      <div className="balance-caja">
          <p className="balance-etiqueta">Balance total</p>
          <p className={`balance-numero ${balanceTotal >= 0 ? "positivo" : "negativo"}`}>
          {balanceTotal < 0 ? "-" : ""}${Math.abs(balanceTotal).toFixed(2)}
          </p>
      </div>

      {/* Abajo */}
      <div className="totales-fila">
          <div className="total-caja">
          <p className="total-etiqueta">Ingresos</p>
          <p className="total-numero ingreso">${totalIngresos.toFixed(2)}</p>
          </div>

          <div className="total-caja">
          <p className="total-etiqueta">Egresos</p>
          <p className="total-numero egreso">${totalEgresos.toFixed(2)}</p>
          </div>
      </div>
      
      <div className={`panel ${superaLimite ? "panel-alerta" : ""}`}>
        <p className="panel-titulo">Límite de Gastos Mensual</p>

        {superaLimite && (
          <div className="alerta-presupuesto">
            ⚠️ ¡Superaste tu límite de gastos!
            <br />
            <span>
              Gastaste $
              {totalEgresos.toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              })}{" "}
              de un límite de $
              {limite.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
            </span>
          </div>
        )}

        <div className="campo">
          <label>Límite mensual ($)</label>
          <input
            type="number"
            placeholder="Ej: 50000"
            min="0"
            step="100"
            value={limitePresupuesto}
            onChange={(e) => setLimitePresupuesto(e.target.value)}
          />
        </div>
    </div>
 </div>
    


    
  );
}