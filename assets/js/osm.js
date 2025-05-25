document.addEventListener("DOMContentLoaded", function () {
  const mapDiv = document.getElementById("map");
  const lat = parseFloat(mapDiv.dataset.lat);
  const lon = parseFloat(mapDiv.dataset.lon);
  const popup = mapDiv.dataset.popup;

  const map = L.map("map").setView([lat, lon], 4.5);

let tileStyle = "light_all";
//if (localStorage.getItem('dark-mode') === 'true') {
//    tileStyle = "dark_all";
//}

L.tileLayer(`https://{s}.basemaps.cartocdn.com/${tileStyle}/{z}/{x}/{y}{r}.png`, {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(popup)
    .openPopup();
});
