async function carregarParceiroDetalhado(id) {
  try {
    const response = await fetch(`https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros/${id}`);
    const parceiro = await response.json();

    const card = document.getElementById('parceiro-card');
    card.innerHTML = `
      <div class="section" style="text-align: center;">
        <img src="${parceiro.avatar || `https://picsum.photos/seed/${parceiro.id}/300/300`}" alt="Avatar" class="avatar"/>
        <h2>${parceiro.nomeParceiro}</h2>
        <small>Data de cadastro: ${new Date(parceiro.dataCriacao).toLocaleDateString()}</small>
      </div>

      <div class="section">
        <h3>Responsável:</h3>
        <p class="info">${parceiro.responsavelParceiro}</p>
      </div>

      <div class="section">
        <h3>Contato:</h3>
        <p><strong>Telefone:</strong> ${parceiro.telResponsavel || 'Não informado'}</p>
        <p><strong>Email:</strong> ${parceiro.emailResponsavel || 'Não informado'}</p>
      </div>

      <div class="section">
        <h3>Endereço:</h3>
        <p><strong>Rua:</strong> ${parceiro.rua || '---'}</p>
        <p><strong>Número:</strong> ${parceiro.numero || '---'}</p>
        <p><strong>Bairro:</strong> ${parceiro.bairro || '---'}</p>
      </div>

<div class="section">
  <h3>Tipos de resíduos aceitos:</h3>
  <ul class="residuos">
    ${
      (() => {
        const tiposResiduos = {
          papel: 'Papel',
          plastico: 'Plástico',
          vidro: 'Vidro',
          metal: 'Metal',
          oleoCozinha: 'Óleo de Cozinha',
          pilhaBateria: 'Pilha/Bateria',
          eletronico: 'Eletrônico',
          roupa: 'Roupa',
          roupas: 'Roupas',
          outros: 'Outros'
        };

        const aceitos = Object.entries(tiposResiduos)
          .filter(([chave]) => parceiro[chave] === true)
          .map(([_, nomeFormatado]) => `<li>${nomeFormatado}</li>`);

        return aceitos.length > 0
          ? aceitos.join('')
          : '<li>Nenhum resíduo aceito</li>';
      })()
    }
  </ul>
</div>
    `;
  } catch (error) {
    document.getElementById('parceiro-card').innerHTML = '<p>Erro ao carregar dados do parceiro.</p>';
    console.error(error);
  }
}

carregarParceiroDetalhado(new URLSearchParams(window.location.search).get('id') || '1');
//const params = new URLSearchParams(window.location.search);
//const id = params.get('id');
//if (id) carregarParceiroDetalhado(id);
