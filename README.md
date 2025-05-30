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

```
git clone https://github.com/seu-usuario/api-moda-feminina.git
cd api-moda-feminina
```

### 2. Instale as dependências
```
npm install

node index.js

```

### A API estará disponível em: http://localhost:3000/produtos

---

## 📄 Endpoints da API
### 🔍 GET /produtos
Retorna todos os produtos cadastrados na API.

Exemplo de resposta:

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

### ➕ POST /produtos
Adiciona um novo produto ao array.

Corpo da requisição (application/json):

```
{
  "id": 13,
  "nome": "Exemplo Produto",
  "categoria": "Roupas",
  "preco": 99.90,
  "imagem": "https://exemplo.com/imagem.jpg"
}
```

Exemplo de resposta:

```
{
  "id": 13,
  "nome": "Exemplo Produto",
  "categoria": "Roupas",
  "preco": 99.90,
  "imagem": "https://exemplo.com/imagem.jpg"
}
```

## 🌐 Como Integrar com Front-End
Você pode consumir esta API facilmente em seu front-end com fetch():

```
fetch('http://localhost:3000/produtos')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## 📚 Créditos Acadêmicos
Este projeto foi desenvolvido como parte da disciplina Programação Web 3, do curso Técnico em Desenvolvimento de Sistemas, sob orientação dos professores Fátima e Cláudio.
