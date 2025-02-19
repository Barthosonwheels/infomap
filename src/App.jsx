import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pointsData from './locations.json';

// Define the bounds for Europe
const europeBounds = L.latLngBounds(
  L.latLng(35, -10), // Southwest corner 
  L.latLng(72, 30)   // Northeast corner 
);

function App() {
  return (
    <MapContainer 
      center={[50, 10]} 
      zoom={3} 
      style={{ height: '500px', width: '500px' }}
      maxBounds={europeBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        maxZoom={20}
      />
      {pointsData.points.map((point) => (
        <CircleMarker
          key={point.id}
          center={[point.latitude, point.longitude]}
          radius={3}  // Adjust the radius as needed
          color="red"  // Set the color to red
          fillColor="red"
          fillOpacity={1}
        >
          <Popup>
            <h3>{point.name}</h3>
            <p>{point.description}</p>
            <img 
              src={point.logo} 
              alt={`${point.name} logo`} 
              style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '10px' }} 
            />
            <p>
              <a href={point.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
            </p>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default App;
