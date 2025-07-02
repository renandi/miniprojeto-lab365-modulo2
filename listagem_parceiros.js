var container = document.getElementById("cards-container");

function createCard(obj) {
  var card = document.createElement("card");
  card.id = "card-" + obj.id;

  var avatar = document.createElement("p");
  avatar.innerText = obj.tipoParceiro;

  var img = document.createElement("img");

  switch (obj.tipoParceiro) {
    case "ECO":
      img.src = "images/ecoponto-pin.png";
      break;
    case "COO":
      img.src = "images/shake-hands-logo.png";
      break;
    case "PEVs":
      img.src = "images/icons8-sinal-de-reciclagem-64.png";
      break;
  }

  img.classList.add("avatar");

  var nomeText = document.createElement("p");
  nomeText.innerText = obj.nomeParceiro;

  var bairroText = document.createElement("p");
  bairroText.innerText = obj.bairro;

  var dataInclusaoText = document.createElement("p");
  var date = obj.dataCriacao.split("-")[2].split("T")[0]+"/"+obj.dataCriacao.split("-")[1]+"/"+obj.dataCriacao.split("-")[0];
  dataInclusaoText.innerText = "Data de cadastro: " + date;

  card.appendChild(avatar);
  card.appendChild(img);
  card.appendChild(nomeText);
  card.appendChild(bairroText);
  card.appendChild(dataInclusaoText);

  container.appendChild(card);
  card.classList.add("card");
}

fetch("https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros")
  .then((response) => response.json())
  .then((parceiros) => {
    // console.log(parceiros);
    parceiros.forEach((parceiro) => {
      if (parceiro.id > 2) createCard(parceiro);
    });
  })
  .catch((error) => {
    console.log("Ocorreu um erro ao buscar os parceiros", error);
  });


const searchInput = document.getElementById("searchText");
const search = document.getElementById("searchBtn");
search.addEventListener ("click", () => {
  fetch(
    "https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros"
  )
    .then((response) => response.json())
    .then((parceiros) => {

    parceiros.forEach((parceiro) => {
        if ((parceiro.nomeParceiro.toLowerCase().includes(searchInput.value.toLowerCase()) || parceiro.bairro.toLowerCase().includes(searchInput.value.toLowerCase())))
            showCard(parceiro.id);
        else hideCard(parceiro.id);
      });
    })
    .catch((error) => {
      console.log("Ocorreu um erro ao buscar os parceiros", error);
    });
});


function hideCard(parceiroId) {
    const card = document.getElementById("card-"+parceiroId);
    if (card) {
        card.style.display = "none";
    }
}

function showCard (id) {
    const card = document.getElementById("card-"+id);
    if (card) {
        card.style.display = "flex";
    }
}