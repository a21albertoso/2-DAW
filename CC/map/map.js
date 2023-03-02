const map = L.map("map").setView([42.87876, -8.547238], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([42.87876, -8.547238]).addTo(map);

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
}
map.on('click', onMapClick);