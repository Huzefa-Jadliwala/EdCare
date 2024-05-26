import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/map.style.css";

export default function Map() {
  const markers = [
    {
      key: "1",
      geocode: [50.8310585585904, 12.8774888058499],
      popUp: "Hello 1",
    },
    {
      key: "2",
      geocode: [50.809930951272, 12.8904748101941],
      popUp: "Hello 2",
    },
    {
      key: "3",
      geocode: [50.830248228945, 12.9145612977855],
      popUp: "Hello 3",
    },
  ];
  return (
    <MapContainer center={[50.833332, 12.916667]} zoom={12} className="h-50">
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      {markers.map((marker) => (
        <Marker position={marker.geocode} key={marker.key}></Marker>
      ))}
    </MapContainer>
  );
}
