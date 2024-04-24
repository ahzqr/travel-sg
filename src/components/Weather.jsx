import { useEffect } from "react";
import L from "leaflet";

function Weather() {
  useEffect(() => {
    fetch("https://api.rainviewer.com/public/weather-maps.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.radars && data.radars.length > 0) {
          // Find the radar layer URL for Singapore
          const singaporeRadar = data.radars.find(
            (radar) => radar.name === "Singapore"
          );

          if (singaporeRadar) {
            // Render radar map using Leaflet.js
            const map = L.map("map").setView([1.3521, 103.8198], 10);
            L.tileLayer(singaporeRadar.path, {
              attribution:
                'Map data &copy; <a href="https://www.rainviewer.com">Rainviewer</a>',
            }).addTo(map);
          } else {
            console.error("Radar data for Singapore not found");
          }
        } else {
          console.error("No radar data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching radar data:", error);
      });
  }, []);

  return <div id="map" style={{ width: "100%", height: "600px" }}></div>;
}

export default Weather;
