import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import pointsData from './locations.json';

function App() {
  console.group(pointsData)
  console.log("yooo")
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
