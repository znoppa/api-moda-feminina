const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Vestido Floral",
    categoria: "Roupas",
    preco: 120.00,
    imagem: "https://static.ecosweb.com.br/public/produtos/moda-feminina/vestido-longo/vestido-longo-floral-etnico-com-decote-profundo_349335_600_1.webp"
  },
  {
    id: 2,
    nome: "Bolsa Couro",
    categoria: "Acessórios",
    preco: 89.90,
    imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR7VfBOolQR4-2UB5qiVejqbFPlZjtgkbc1_Jt7cew5JWKkLxHS3mOqHAPuuBJZsmF-XiLWlFRRf-LzdtXvbMaMxeSoY9mgd9qsEieQN5pKqA1ktTeXRdKpV7c"
  },
  {
    id: 3,
    nome: "Tênis Branco",
    categoria: "Calçados",
    preco: 199.00,
    imagem: "https://www.jotagestore.com.br/cdn/shop/products/air-force-1-branco-34-628c04840c232-large_700x.jpg?v=1677161238"
  },
  {
    id: 4,
    nome: "Sapatinho de Couro",
    categoria: "Calçados",
    preco: 149.00,
    imagem: "https://www.temtotal.com.br/media/catalog/product/cache/5ea67f35e8413438b2444b88d23bc8f1/d/e/design_sem_nome_12_.png"
  },
  {
    id: 5,
    nome: "Macacão Trend Pink",
    categoria: "Roupas",
    preco: 89.90,
    imagem: "https://lojamariagueixa.vtexassets.com/arquivos/ids/178485/12121-1.jpg.jpg?v=638798861096970000"
  },
  {
    id: 6,
    nome: "Dunk Air Force",
    categoria: "Calçados",
    preco: 299.90,
    imagem: "https://www.aw-lab.com/dw/image/v2/BJTH_PRD/on/demandware.static/-/Sites-awlab-master-catalog/default/dwf0038887/images/large/8041617_0.jpg?sw=843"
  },
  {
    id: 7,
    nome: "Saia Jeans",
    categoria: "Roupas",
    preco: 75.00,
    imagem: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTdlyWtqtSwB4FjMrcHbNJKur0wmZN63nEOu6pkslt5wkn925c0Mx0SPYVK0hGufBiCjvIWWRBxKp7f9hTyDnT1SxvnVgKXCFqUnfUEOasqd1yG4D2-l6C8"
  },
  {
    id: 8,
    nome: "Brinco de Argola",
    categoria: "Acessórios",
    preco: 25.00,
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRDVJ7RaPOEaKvD7_JjVt_UNHcymm2je0ynnIKYYGtEBMUiG1qFW_54qNrCSALUa_ZIUE3vDNvhFgOIXaxhCOahvN7ULGFSPsdxDApTQeRb"
  },
  {
    id: 9,
    nome: "Camisa Social Feminina",
    categoria: "Roupas",
    preco: 99.00,
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSJtJGVzadh04T7xxNq385vz7j6f1NERpUUmIT8VUEDGkZhu-aKEeZe3p0ysjsyeTt3QwyFAxFw5AyjFI018556wuvTWojq2s0HIoQdoiMdjhng3HB8f6KjYA"
  },
  {
    id: 10,
    nome: "Salto Alto Vermelho",
    categoria: "Calçados",
    preco: 189.00,
    imagem: "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/ellasonl/catalog/novas/ssmpreto.20200813150432.jpg"
  },
  {
    id: 11,
    nome: "Vestido Preto",
    categoria: "Roupas",
    preco: 389.00,
    imagem: "https://img.lojasrenner.com.br/item/927935371/original/4.jpg"
  },
  {
    id: 12,
    nome: "Choker Pérolas",
    categoria: "Acessórios",
    preco: 89.00,
    imagem: "https://images.tcdn.com.br/img/img_prod/1022170/colar_choker_perolas_c_colar_voltas_courinho_preto_elegante_2810_3_75cb521542a02338820c4f08d5dbc472.jpeg"
  }
];

// Rota pública GET
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

// Rota pública POST (opcional)
app.post('/produtos', (req, res) => {
  const novo = req.body;
  produtos.push(novo);
  res.status(201).json(novo);
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
