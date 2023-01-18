  
const velibName = document.getElementById("velib-name");
const mechanical = document.getElementById("mechanical");
const ebike = document.getElementById("ebike");
const capacity = document.getElementById("capacity")
const city = document.getElementById("city")

const refreshVelibData = () => {
    
fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=100')
  .then(response => response.json())
  .then(data => {
    city.innerHTML = data.records[3].fields.nom_arrondissement_communes;
    velibName.innerHTML = data.records[3].fields.name;
    mechanical.innerHTML = `Vélo classique réstant : ${data.records[3].fields.mechanical}`;
    ebike.innerHTML = `Vélo à assistance éléctrique réstant : ${data.records[3].fields.ebike}`;
    capacity.innerHTML = `Capacité restante de vélo : ${data.records[3].fields.capacity}`;
    console.log(data);
  });

}

  refreshVelibData();
  setInterval(refreshVelibData, 6000);

  let map = L.map('map').setView([48.837525839067, 2.3360354080796 ], 18);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker([48.837525839067, 2.3360354080796 ]).addTo(map)
