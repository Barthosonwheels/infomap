import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pointsData from './locations.json';
import MediaCard from './MediaCard';  // Adjust the import path as needed
// Define the bounds for Europe
const europeBounds = L.latLngBounds(
  L.latLng(35, -10), // Southwest corner 
  L.latLng(72, 30)   // Northeast corner 
);

function App() {
  return (
    <MapContainer 
      center={[50, 10]} 
      zoom={4} 
      style={{ height: '500px', width: '500px' }}
      maxBounds={europeBounds}
      maxBoundsViscosity={1.0}
    >
<TileLayer
  url="https://api.maptiler.com/maps/dataviz-dark/{z}/{x}/{y}.png?key=XRbKztMHRBdegdFg4Zpf"
  attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
  maxZoom={20}
/>

      {pointsData.points.map((point) => (
        <CircleMarker
          key={point.id}
          center={[point.latitude, point.longitude]}
          radius={5}  // Adjust the radius as needed
          color="black"  // Set the color to red
          fillColor="red"
          fillOpacity={1}
        >
          <Popup
            autoPan={true}
            maxWidth={200}
            height={80}
            keepInView={true}
          >
          <MediaCard
            name={point.name}
            description={point.description}
            logo={point.logo}
            link={point.link}
          />
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default App;
