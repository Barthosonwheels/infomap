import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import pointsData from './locations.json';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '800px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pointsData.points.map((point) => (
        <Marker key={point.id} position={[point.latitude, point.longitude]}>
          <Popup>
            <h3>{point.name}</h3>
            <p>{point.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
