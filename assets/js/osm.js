document.addEventListener("DOMContentLoaded", function () {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  const zoom = parseFloat(mapDiv.dataset.zoom) || 13;
  const markerFile = mapDiv.getAttribute("marker_file");

  async function loadMarkers(source, imported = new Set()) {
    let markerData = [];
    if (typeof source === "string") {
      if (imported.has(source)) {
        console.error("Import loop detected:", source);
        return markerData;
      }
      imported.add(source);
      const resp = await fetch(source);
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      const arr = await resp.json();
      const more = await loadMarkers(arr, imported);
      markerData = markerData.concat(more);
      return markerData;
    }
    if (Array.isArray(source)) {
      for (const mk of source) {
        if (mk && mk.import) {
          const moreMarkers = await loadMarkers(mk.import, imported);
          if (Array.isArray(moreMarkers)) markerData.push(...moreMarkers);
        } else {
          markerData.push(mk);
        }
      }
    }
    return markerData;
  }

  function initMap(markerData) {
    markerData = spreadOverlappingMarkers(markerData);
    if (!markerData.length) {
      const map = L.map("map", {worldCopyJump: true,}).setView([0, 0], zoom);
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);
      return;
    }

    const map = L.map("map", {worldCopyJump: true,}).setView([markerData[0].lat, markerData[0].lon], zoom);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    const bounds = [];

    markerData.forEach(({ lat, lon, popup, icon }, index) => {
      if (typeof lat !== "number" || typeof lon !== "number") return;
      const markerIcon = L.icon({
        iconUrl: icon || '/images/leaflet/marker.avif',
        iconSize: [32, 37],
        iconAnchor: [16, 37],
        popupAnchor: [0, -30],
      });

      const marker = L.marker([lat, lon], { icon: markerIcon }).addTo(map);

      if (popup) {
        marker.bindPopup(popup);
        if (markerData.length === 1) marker.openPopup();
      }

      bounds.push([lat, lon]);
    });

    if (bounds.length > 1) {
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }

  (async () => {
    if (markerFile) {
      try {
        const markerData = await loadMarkers(markerFile);
        initMap(markerData);
      } catch (e) {
        console.error("Failed to load marker file:", e);
        try {
          const inlineMarkers = JSON.parse(mapDiv.dataset.markers || "[]");
          const markerData = await loadMarkers(inlineMarkers);
          initMap(markerData);
        } catch {
          initMap([]);
        }
      }
    } else {
      try {
        const inlineMarkers = JSON.parse(mapDiv.dataset.markers || "[]");
        const markerData = await loadMarkers(inlineMarkers);
        initMap(markerData);
      } catch {
        initMap([]);
      }
    }
  })();
});

function spreadOverlappingMarkers(markerData, dx = 1.4) {
  const map = new Map();
  for (const mk of markerData) {
    if (typeof mk.lat !== "number" || typeof mk.lon !== "number") continue;
    const key = mk.lat + ',' + mk.lon;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(mk);
  }

  const result = [];
  for (const group of map.values()) {
    const n = group.length;
    if (n === 1) {
      result.push(group[0]);
      continue;
    }
    const centerLat = group[0].lat, centerLon = group[0].lon;
    for (let i = 0; i < n; ++i) {
      const angle = (2 * Math.PI * i) / n;
      const latJitter = centerLat + dx * Math.cos(angle);
      const lonJitter = centerLon + dx * Math.sin(angle);
      result.push({ ...group[i], lat: latJitter, lon: lonJitter });
    }
  }
  return result;
}