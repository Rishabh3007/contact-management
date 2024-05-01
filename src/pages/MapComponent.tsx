// import { TileLayer, MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
// });

// const center = { lat: 59.433421, lng: 24.75224 };

// export default function MapComponent() {
//   function onEachFeature(feature: any, layer: L.Layer) {
//     if (feature.properties) {
//       const { popupContent } = feature.properties;
//       layer.bindPopup(popupContent);
//     }
//   }
//   return (
//     <MapContainer
//       style={{ height: "80vh", width: "100vw" }}
//       center={center}
//       zoom={2}
//     >
//       <TileLayer
//         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[59.43046, 24.728563]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//       {/* <GeoJSON data={sensors} onEachFeature={onEachFeature} /> */}
//     </MapContainer>
//   );
// }


import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

const center = { lat: 20, lng: 0 }; // Center the map at a default location

export default function MapComponent() {
  const [markers, setMarkers] = useState([]);

  const { isLoading, error, data } = useQuery(
    {
        queryKey : ["covidData"],
        queryFn : async () => {
            const response = await axios.get("https://disease.sh/v3/covid-19/countries");
            return response.data;
        }
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Create markers based on the fetched data
  const createMarkers = () => {
    const newMarkers = data.map((country : any) => (
      <Marker
        key={country.country}
        position={[country.countryInfo.lat, country.countryInfo.long]}
      >
        <Popup>
          <div>
            <h3>{country.country}</h3>
            <p>Total Active Cases: {country.active}</p>
            <p>Total Recovered: {country.recovered}</p>
            <p>Total Deaths: {country.deaths}</p>
          </div>
        </Popup>
      </Marker>
    ));
    setMarkers(newMarkers);
  };

  // Call createMarkers once the data is fetched
  if (data && data.length > 0 && markers.length === 0) {
    createMarkers();
  }

  return (
    <MapContainer
      style={{ height:"50%", width: "80%", margin: "20px auto", position: "relative", zIndex: "-20" }}
      center={center}
      zoom={2}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {markers}
    </MapContainer>
  );
}
