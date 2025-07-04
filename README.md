# 🔋 API de Consulta de Baterias para Veículos

Essa é uma API RESTful feita em **Node.js + Express** com banco de dados **SQLite** que fornece informações detalhadas sobre baterias recomendadas para veículos. Ideal para uso em oficinas, autocenters e sistemas de recomendação automática.

## 📦 Funcionalidades

- 🔍 Consultar baterias por modelo de carro
- 🏷️ Filtro por marca do veículo
- ⚡ Filtro por amperagem
- 📄 Retorna dados como: CCA, lado do polo, observações e mais

---

## 🚀 Como executar

node index.js
A API ficará disponível em http://localhost:3001

---
## 📂 Estrutura do Projeto

autogest-api/
├── index.js          # Arquivo principal da API
├── database.db       # Banco SQLite com dados de carros e baterias
├── routes/           # Rotas da aplicação
└── ...
---

## 🧪 Endpoints
GET /api/carros
Retorna todos os veículos com informações de bateria.

Exemplo de resposta:

[
  {
    "idcarro": 1,
    "nome": "CORSA",
    "ano": "2000-2014",
    "amper": "60",
    "lado": "DIR",
    "cca": "460",
    "marca": "CHEVROLET",
    "obs": null
  },
  ...
]

GET /api/carros?search=chevrolet
Filtra carros com base no nome, marca ou amperagem.

---
## 🛠️ Tecnologias Utilizadas
- Node.js
- Express
- SQLite
- CORS
- Nodemon (para desenvolvimento)
---
> Desenvolvido por Nathan Fernandes Alves
