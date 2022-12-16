let player1;
const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

function getPokeInfo(url, name) {
    fetch(url + name) 
        .then(response => response.json())
        .then(data => {
            player1 = data;
        })
        .catch(error => console.log("Pokemon not found"));
}

const searchButton1 = document.getElementById("search-buttonP1");
const searchInput1 = document.getElementById("search-inputP1");
const container = document.getElementById("pokeContainer");

searchButton1.addEventListener('click', event => {
    pokeName = searchInput1.value.toLowerCase();
    getPokeInfo(baseUrl, pokeName);

    setTimeout(function () {
      console.log(player1);
      container.innerHTML = createCard();
    }, 1000)

});

function createCard () {
  card = `
    <div class="pokemon-picture">
                <img src="${player1.sprites.front_default}" alt="Sprite of ${player1.name}" class="mx-auto h-56">
            </div>
            <div class="pokemon-name">
                <p class="text-center text-2xl font-bold">${player1.name}</p>
    </div>  
    `;
  return card;
}



