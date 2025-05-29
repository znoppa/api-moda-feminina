# 🛍️ API de Moda Feminina

Esta API foi desenvolvida como requisito para obtenção de nota no curso **Técnico em Desenvolvimento de Sistemas**, na disciplina **Programação Web 3**, ministrada pelos professores **Fátima** e **Cláudio**.

O objetivo é fornecer uma API simples para um e-commerce de moda feminina, com dados de produtos como roupas, calçados e acessórios.

---

## 📦 Funcionalidades da API

- Listagem de produtos via requisição `GET`
- Inserção de novos produtos via requisição `POST`
- Suporte a CORS para integração com front-end em qualquer origem

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)

---

## 🚀 Como Rodar o Projeto

### 1. Clone este repositório

No terminal do visual studio:

git clone https://github.com/seu-usuario/api-moda-feminina.git
cd api-moda-feminina

### 2. Instale as dependências

npm install
<br>
node index.js
<br>

### A API estará disponível em: http://localhost:3000/produtos

---

## 📄 Endpoints da API
### 🔍 GET /produtos
Retorna todos os produtos cadastrados na API.

Exemplo de resposta:

json <br>
```
[
  {
    "id": 1,
    "nome": "Vestido Floral",
    "categoria": "Roupas",
    "preco": 120.00,
    "imagem": "URL da imagem"
  },
  ...
]
```
