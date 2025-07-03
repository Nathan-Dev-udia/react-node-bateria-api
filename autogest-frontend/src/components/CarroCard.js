import React from "react";
import "./CarroCard.css";

function CarroCard({ carro }) {
  return (
    <div className="carro-card">
      <h2>{carro.nome} ({carro.ano})</h2>
      <p className="marca">{carro.marca}</p>
      <p>
        🔋 Amperagem: <strong>{carro.amper}</strong> | Polo: {carro.lado} | CCA: {carro.cca}
      </p>
      {carro.obs && <p className="obs">📝 {carro.obs}</p>}
    </div>
  );
}

export default CarroCard;