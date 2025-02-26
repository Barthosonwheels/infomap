import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pointsData from './locations.json';
import MediaCard from './MediaCard';

// Define the bounds for Europe
const europeBounds = L.latLngBounds(
  L.latLng(35, -15),  // Southwest corner
  L.latLng(60, 40)    // Northeast corner
);

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer 
        center={[45, 10]} 
        zoom={4} 
        style={{ height: '100%', width: '100%' }}
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
            radius={5}
            color="grey"
            fillColor="white"
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
    </div>
  );
}

export default App;
