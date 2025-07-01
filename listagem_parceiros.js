
var container = document.getElementById("cards-container");

function createCard(obj) {

    var card = document.createElement("card");
    
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
    dataInclusaoText.innerText = obj.dataCriacao;;

    card.appendChild(avatar);
    card.appendChild(img);
    card.appendChild(nomeText);
    card.appendChild(bairroText);
    card.appendChild(dataInclusaoText);

    container.appendChild(card);
    card.classList.add("card");
}


fetch("https://6860899b8e74864084437167.mockapi.io/jmt-futurodev/api/parceiros")
.then(response => response.json())
.then(parceiros => {
    // console.log(parceiros);
    parceiros.forEach(parceiro => {
        if (parceiro.id>2) createCard(parceiro);
    });
})
.catch(error => {
    console.log("Ocorreu um erro ao buscar os parceiros", error);
})