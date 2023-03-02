let numeropokemon = Math.random()*1008+1;
let numeropokemonentero = numeropokemon.toFixed();
console.log(numeropokemonentero);

fetch("https://pokeapi.co/api/v2/pokemon/"+numeropokemonentero).then((response) => {
    if (response.ok) return response.json();
    return Promise.reject(response);
    })
    .then((data) => 
    console.log(data)+
    console.log(data["name"])+
    console.log(data["abilities"]))
    .catch(function (error) {
    console.warn("Something went wrong.", error.message);
    });