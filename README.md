# 🔋 Consulta de Baterias para Veículos — Fullstack (React + Node.js)

Este é um projeto completo com **frontend em React.js** e **backend em Node.js + Express**, utilizando **SQLite** como banco de dados. Ele fornece informações detalhadas sobre baterias recomendadas para veículos de acordo com marca, modelo e características técnicas.

Ideal para uso em oficinas, autocenters e sistemas internos de recomendação de baterias.

---

## 📦 Funcionalidades

- 🔍 Consulta interativa de baterias por modelo de carro
- 🏷️ Filtro por marca do veículo
- ⚡ Filtro por amperagem
- 📄 Retorno de dados técnicos como CCA, lado do polo, observações e mais
- 🌐 Interface web desenvolvida em React para visualização e busca

---

## 🚀 Como executar o projeto

### 🔧 Backend (API - Node.js)

1. Acesse a pasta do backend:
   ```bash
   cd autogest-api
2. Instale as dependências:
- npm install;
3. Inicie o servidor:
  node index.js
A API estará disponível em: http://localhost:3001

### 💻 Frontend (Interface - React)
1. Acesse a pasta do frontend:
   cd autogest-frontend
2. Instale as dependencias:
- React;
3. Inicie o projeto React:
  npm start
O frontend estará disponível em: http://localhost:3000
(O back e o front devem estar online simultaneamente. Ele se comunica automaticamente com o backend na porta 3001)

---
## 📂 Estrutura do Projeto
```
.
├── autogest-api/ # Backend (Node.js + Express)
│ ├── index.js # Arquivo principal da API
│ ├── database.db # Banco SQLite com dados de carros e baterias
│ ├── routes/ # Rotas da API
│ └── ...
│
├── autogest-frontend/ # Frontend (React.js)
│ ├── public/ # Arquivos estáticos
│ ├── src/ # Código-fonte React
│ │ ├── components/ # Componentes reutilizáveis (como CarroCard)
│ │ ├── App.js # Componente principal
│ │ └── ...
│ ├── package.json # Configurações e dependências do React
│ └── ...
```
---

## 🧪 Endpoints

### 🔹 GET `/api/carros`
Retorna todos os veículos com informações de bateria.

**Exemplo de resposta:**
```json
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
```
🔹 GET /api/carros?search=chevrolet
Filtra carros com base no nome, marca ou amperagem (case-insensitive).

---
## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express
- SQLite
- CORS
- Nodemon (para desenvolvimento)

### Frontend
- React
- CSS
- Fetch API

---
## ⚠️ Observação
Este projeto foi desenvolvido como um caso de estudo, com o objetivo principal de entender a criação de uma API utilizando Node.js e Express, além de testar uma integração básica com React no frontend. Atualmente, o banco de dados não possui uma quantidade tão volumosa de veículos.

Futuramente, planejo expandir a API para torná-la mais completa e robusta, incluindo um catálogo maior de carros, melhorias nos filtros e outras funcionalidades para facilitar demandas reais de mercado.

---

> Desenvolvido por Nathan Fernandes Alves
