async function carregarParceiroDetalhado(id) {
  try {
    const response = await fetch(`https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros/${id}`);
    const parceiro = await response.json();

    const card = document.getElementById('parceiro-card');
    card.innerHTML = `
      <div class="section" style="text-align: center;">
        <img src="${parceiro.avatar || 'https://via.placeholder.com/100'}" alt="Avatar" class="avatar"/>
        <h2>${parceiro.nome}</h2>
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
         ${(parceiro.residuos || []).map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `;
  } catch (error) {
    document.getElementById('parceiro-card').innerHTML = '<p>Erro ao carregar dados do parceiro.</p>';
    console.error(error);
  }
}

carregarParceiroDetalhado(12);
