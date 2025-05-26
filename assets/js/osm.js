document.addEventListener("DOMContentLoaded", function () {
  const mapDiv = document.getElementById("map");
  if (!mapDiv) return;

  const zoom = parseFloat(mapDiv.dataset.zoom) || 13;
  const markerFile = mapDiv.getAttribute("marker_file");

  const map = L.map("map", { worldCopyJump: true }).setView([0, 0], zoom);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const bounds = L.latLngBounds();
  const markersLayerGroup = L.layerGroup().addTo(map);

  const markerIconDefault = L.icon({
    iconUrl: '/images/leaflet/marker.avif',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -30],
  });

  const globalMarkerBuffer = [];
  const importedFiles = new Set();
  const cache = new Map();

  function clearMarkers() {
    markersLayerGroup.clearLayers();
    bounds._northEast = bounds._southWest = undefined;
  }

  function renderAllMarkers() {
    clearMarkers();
    const spreadMarkers = spreadOverlappingMarkers(globalMarkerBuffer);

    for (const { lat, lon, popup, icon } of spreadMarkers) {
      if (typeof lat !== "number" || typeof lon !== "number") continue;

      // Always use a placeholder icon initially
      const placeholderIcon = markerIconDefault || L.icon({
        iconUrl: '/images/leaflet/marker.avif',
        iconSize: [32, 37],
        iconAnchor: [16, 37],
        popupAnchor: [0, -30],
      });

    const marker = L.marker([lat, lon], { icon: placeholderIcon }).addTo(markersLayerGroup);

    if (popup) marker.bindPopup(popup);
    bounds.extend([lat, lon]);

    // If a custom icon is defined and different, load it asynchronously
    if (icon && icon !== placeholderIcon.options.iconUrl) {
      const img = new Image();
      img.onload = () => {
        const updatedIcon = L.icon({
          iconUrl: icon,
          iconSize: [32, 37],
          iconAnchor: [16, 37],
          popupAnchor: [0, -30],
        });
        marker.setIcon(updatedIcon);
      };
      img.onerror = () => {
        console.warn("Failed to load marker icon:", icon);
      };
      img.src = icon;
    }
  }

  // Handle zoom/popup logic
  if (bounds.isValid()) {
    if (globalMarkerBuffer.length === 1) {
      const [lat, lon] = [globalMarkerBuffer[0].lat, globalMarkerBuffer[0].lon];
      map.setView([lat, lon], 3.9); // custom zoom for solo marker
    } else {
      map.fitBounds(bounds, {
        padding: [30, 30],
        maxZoom: zoom
      });
    }
  }

  // Auto-open popup if there's only one marker
  if (globalMarkerBuffer.length === 1 && globalMarkerBuffer[0].popup) {
    const marker = markersLayerGroup.getLayers()[0];
    if (marker && marker.openPopup) {
      marker.openPopup();
    }
  }
}

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

  async function streamMarkers(source) {
    if (typeof source === "string") {
      if (importedFiles.has(source)) return;
      importedFiles.add(source);

      if (!cache.has(source)) {
        const resp = await fetch(source);
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        const json = await resp.json();
        cache.set(source, json);
      }

      await streamMarkers(cache.get(source));
      return;
    }

    if (Array.isArray(source)) {
      for (const mk of source) {
        if (mk && mk.import) {
          await streamMarkers(mk.import);
        } else {
          globalMarkerBuffer.push(mk);
        }
      }

      // Re-render all markers with spread jitter after this batch
      renderAllMarkers();
    }
  }

  (async () => {
    try {
      if (markerFile) {
        await streamMarkers(markerFile);
      } else {
        const inlineMarkers = JSON.parse(mapDiv.dataset.markers || "[]");
        await streamMarkers(inlineMarkers);
      }
    } catch (e) {
      console.error("Failed to load markers:", e);
    }
  })();
});
