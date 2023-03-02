const boton = document.getElementById("boton");

const buscar = boton.addEventListener("click", () => {
  const input = document.getElementById("serchPokemon");
  const nombreBuscar = input.value;

  const searchPokemon = nombreBuscar.toLowerCase();
  const urlPokedex = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010";
  var corpo = document.querySelector("#container");

  fetch(urlPokedex)
    .then((response) => {
      if (response.ok) return response.json();
      return Promise.reject(response);
    })
    .then(function (pokemon) {
      if (corpo !== null) {
        const foto = document.createElement("div");
        foto.setAttribute("class", "divImagen")
        const tabla = document.querySelector("table");
        corpo = corpo.remove();
        corpo = document.createElement("div");
        corpo.setAttribute("id", "container");
        corpo.innerHTML =
          '<h1 class="text-center" id="nomePokemon"></h1>' +
          '<table class="text-center  table-bordered border justify-content-center table-responsive">' +
          '<tr id="1">' +
          '<th name="nome"></th>' +
          "</tr>" +
          "</table>" +
          "<br />" +
          '<table class="table-bordered table-sm border" id="stats">' +
          "<tr>" +
          "<th>HP</th>" +
          "  <th>ATK</th>" +
          "<th>DEF</th>" +
          "<th>ATS</th>" +
          "<th>DFS</th>" +
          "<th>SPD</th>" +
          '<th id="total">TTL</th>' +
          "</tr>" +
          '<tr id="stats-tr">' +
          "  </tr>" +
          " </table>";
        const h1 = document.getElementById("buscador");
        h1.after(corpo);
        corpo.insertAdjacentElement("afterbegin", foto)
        for (const poke of pokemon["results"]) {
          if (poke.name == searchPokemon) {
            fetch(poke.url)
              .then((response) => {
                if (response.ok) return response.json();
                return Promise.reject(response);
              })
              .then(function (pokemon) {
                console.log(pokemon);

                //sprites
                const sprites = pokemon["sprites"];

                const finalSprites = sprites.other.home.front_default;
                const img = document.createElement("img");
                if (finalSprites == null) {
                  const h3 = document.createElement("h3")
                  h3.textContent = "Non se atopou imáxen para este pokémon";
                  foto.insertAdjacentElement("afterbegin", h3);
                } else {
                  img.setAttribute("src", finalSprites);
                  foto.insertAdjacentElement("afterbegin", img);
                }



                //nombre

                const nome = document.getElementById("nomePokemon");
                nome.textContent = pokemon["name"].toUpperCase();

                //ataques

                //habilidades

                const titulo = document.querySelector("th");
                titulo.textContent = "Habilidades";
                const row1 = document.getElementById("1");

                for (const abilities of pokemon["abilities"]) {
                  fetch(abilities.ability.url)
                    .then((response) => {
                      if (response.ok) return response.json();
                      return Promise.reject(response);
                    })
                    .then(function (ability) {
                      const newRow = document.createElement("tr");
                      const habilidad = document.createElement("td");
                      const descHabilidade = document.createElement("td");
                      for (const nombre of ability.names) {
                        if (nombre.language.name == "es") {
                          const nomeFinal = nombre.name;
                          habilidad.textContent = nomeFinal;
                          row1.after(newRow);
                          newRow.insertAdjacentElement("afterbegin", habilidad);
                        }
                      }
                      for (const iterator of ability.flavor_text_entries) {
                        if (iterator.language.name == "es") {
                          descHabilidade.textContent = iterator.flavor_text;
                        }
                        habilidad.after(descHabilidade);
                      }
                    });
                }
                const tabla = document.getElementById("stats-tr");
                let total = 0;
                for (const iterator of pokemon["stats"]) {
                  const stats = document.createElement("td");
                  stats.textContent = iterator.base_stat;
                  tabla.insertAdjacentElement("beforeend", stats);
                  total = total + iterator.base_stat;
                  const totalStats = document.getElementById("total")

                }
                const ultimaStat = tabla.lastElementChild;
                ultimaStat.after(total)



                //tipos
                const datos = document.createElement("div");

                datos.setAttribute("class", "datos")
                const tipos = document.createElement("div");
                tipos.setAttribute("class", "tipos")
                nome.after(datos)
                datos.after(tipos)

                //peso e altura
                const peso = document.createElement("p");
                peso.textContent = "Peso: " + pokemon.height;
                console.log(pokemon.weight);


                for (const iterator of pokemon["types"]) {
                  const type = iterator.type.name;
                  const typeArray = type.split("");

                  for (let index = 0; index < typeArray.length; index++) {
                    if (index == 0) {
                      typeArray[0] = typeArray[0].toUpperCase();
                    }
                  }
                  typeName = typeArray.join("");

                  const urlTipos = `http://play.pokemonshowdown.com/sprites/types/${typeName}.png`;
                  const tipoImg = document.createElement("img");
                  tipoImg.setAttribute("src", urlTipos)

                  tipos.insertAdjacentElement("beforeend", tipoImg)
                }






                //Lolcalizacion
                console.log(pokemon.location_area_encounters)
                fetch(pokemon.location_area_encounters).
                  then((response) => {
                    if (response.ok) return response.json();
                    return Promise.reject(response)
                  })
                  .then(function (locations) {
                    console.log(locations)

                    for (const location of locations) {

                      console.log(location.location_area["url"])
                      fetch(location.location_area["url"]).
                        then((response) => {
                          if (response.ok) return response.json();
                          return Promise.reject(response)
                        })
                        .then(function (area) {
                          console.log(area.location.url)

                          fetch(area.location.url).
                          then((response) => {
                            if (response.ok) return response.json();
                            return Promise.reject(response)
                          })
                          .then(function (zone) {
                            console.log(zone)
  
                            
                          })
                        })





                    }
                  }) 
                  const divSprites= document.createElement("div");
                  divSprites.setAttribute("class","divSprites")
                  divSprites.setAttribute("class","container-md")

                  const estadisticas = document.getElementById("stats")

                  estadisticas.after(divSprites);

                  console.log(pokemon.sprites.versions["generation-i"]);
                  
                  for (const sprite of pokemon.sprites.versions[""]) {
                    const img=document.createElement('img'); 
                   console.log(sprite);
                   
      
                        img.setAttribute("src",finalSprites); 
                    }
              });
          } else {

          }
        }
      } else {
        corpo =
          '<h1 class="text-center" id="nomePokemon"></h1>' +
          '<table class="text-center  table-bordered border border-info justify-content-center table-responsive">' +
          '<tr id="1">' +
          '    <th name="nome"></th>' +
          "</tr>" +
          "</table>" +
          "<br />" +
          '<table class="table-bordered table-sm border border-info" id="stats">' +
          "<tr>" +
          "<th>HP</th>" +
          "  <th>ATK</th>" +
          "<th>DEF</th>" +
          "<th>ATS</th>" +
          "<th>DFS</th>" +
          "<th>SPD</th>" +
          '<th id="total">TTL</th>' +
          "</tr>" +
          '<tr id="stats-tr">' +
          "  </tr>" +
          " </table>";;
      }
    });
});