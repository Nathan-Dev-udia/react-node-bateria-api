const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const db = new sqlite3.Database("./baterias.db", (err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err.message);
  } else {
    console.log("✅ Conectado ao banco SQLite.");
  }
});

// Rota para listar carros com filtro único de busca (search)
app.get("/api/carros", (req, res) => {
  const search = req.query.search || "";

  const query = `
    SELECT 
      carro.idcarro,
      carro.nome,
      carro.ano,
      carro.obs,
      bateria.amper,
      bateria.lado,
      bateria.cca,
      modelo.marca
    FROM carro
    JOIN bateria ON carro.bateria = bateria.idbat
    JOIN modelo ON carro.idmarca = modelo.idmarca
    WHERE 
      carro.nome LIKE ? OR 
      modelo.marca LIKE ? OR 
      bateria.amper LIKE ?
  `;

  const param = `%${search}%`;
  const params = [param, param, param];

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error("Erro na consulta:", err.message);
      return res.status(500).json({ erro: "Erro interno no servidor" });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});