async function carregarProdutos() {
    try {
      const resposta = await fetch('http://localhost:3000/produtos');
      const dados = await resposta.json();
  
      const container = document.getElementById('produtos');
      container.innerHTML = '';
  
      dados.forEach(produto => {
        const col = document.createElement('div');
        col.className = 'col-lg-3 col-md-4 col-sm-6';
  
        col.innerHTML = `
          <div class="card h-100">
            <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">${produto.nome}</h5>
              <p class="card-text">
                <strong>Categoria:</strong> ${produto.categoria}<br>
                <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}
              </p>
              <a href="#" class="btn-comprar mt-auto">Comprar</a>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
  
    } catch (erro) {
      document.getElementById('produtos').innerHTML = '<p class="text-danger text-center">Erro ao carregar produtos.</p>';
      console.error(erro);
    }
  }
  
  carregarProdutos();
  