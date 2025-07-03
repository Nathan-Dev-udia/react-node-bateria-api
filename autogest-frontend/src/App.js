import React, { useEffect, useState } from "react";
import CarroCard from "./components/CarroCard";
import "./App.css";

function App() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchCarros = (query = "") => {
    setLoading(true);
    fetch(`http://localhost:3001/api/carros?search=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setCarros(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados da API:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCarros(search);
  }, [search]);

  return (
    <div className="app-container">
      <h1>🔋 Consulta de Baterias</h1>
      <input
        type="text"
        placeholder="Buscar por nome, marca ou amperagem..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Carregando...</p>
      ) : carros.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <div className="grid">
          {carros.map((carro) => (
            <CarroCard key={carro.idcarro} carro={carro} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
