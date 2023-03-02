const mapa = document.querySelector("#map");
const formulario = document.getElementById("form");


const map = L.map("map").setView([42.87876, -8.547238],13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Thunderforest_SpinalMap = L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	apikey: '<your apikey>',
	maxZoom: 22
});


function onMapClick(e) {
	L.popup(e.latlng)
		.setContent("jaja estas en " + e.latlng.toString())
		.openOn(map);
	L.marker(e.latlng).addTo(map);

	formulario.innerHTML =`
	<label for="nombre">Nombre:</label>
	<input name="nombre" type="text" id="nombre"><br><br>
	<label for="contra">Descripción:</label>
	<textarea id="area"></textarea><br><br><br><br><br><br>
	<input type="submit">`;
	formulario.setAttribute("class","formulario");
	const name = document.getElementById("nombre");
	var valorname = name.value;
	window.localStorage.setItem('getNome',valorname);
	const area = document.getElementById('area');
	var valorarea = area.value;
	window.localStorage.setItem('getArea',valorarea);
}

map.on('click', onMapClick);

