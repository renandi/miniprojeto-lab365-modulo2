//cadastro
document
  .getElementById("seja-parceiro-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    const formData = new FormData(this);

    const data = {
      dataCriacao: new Date().toISOString(),
      nomeParceiro: formData.get("nomeParceiro"),
      tipoParceiro: formData.get("tipoParceiro"),
      responsavelParceiro: formData.get("responsavelParceiro"),
      telResponsavel: formData.get("telResponsavel"),
      emailResponsavel: formData.get("emailResponsavel"),
      rua: formData.get("rua"),
      numero: parseInt(formData.get("numero")) || 0,
      bairro: formData.get("bairro"),
      papel: formData.has("papel"),
      plastico: formData.has("plastico"),
      vidro: formData.has("vidro"),
      metal: formData.has("metal"),
      oleoCozinha: formData.has("oleoCozinha"),
      pilhaBateria: formData.has("pilhaBateria"),
      eletronico: formData.has("eletronico"),
      roupas: formData.has("roupas"),
      outros: formData.has("outros"),
    };

    try {
      const response = await fetch(
        "https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Parceiro cadastrado com sucesso!");
        document.getElementById("seja-parceiro-form").reset();
      } else {
        alert("Erro ao cadastrar parceiro. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição: ", error);
      alert("Erro de conexão com o servidor.");
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar";
  });
