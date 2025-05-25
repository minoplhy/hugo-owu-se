document.addEventListener("DOMContentLoaded", function () {
  const mapDiv = document.getElementById("map");
  const lat = parseFloat(mapDiv.dataset.lat);
  const lon = parseFloat(mapDiv.dataset.lon);
  const popup = mapDiv.dataset.popup;

  const map = L.map("map").setView([lat, lon], 4.5);

//let tileStyle = "light_all";
//if (localStorage.getItem('dark-mode') === 'true') {
//    tileStyle = "dark_all";
//}

const customIcon = L.icon({
  iconUrl: '/images/leaflet/marker.avif',
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -30],
});

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker([lat, lon], {icon: customIcon})
    .addTo(map)
    .bindPopup(popup)
    .openPopup();
});
