import React, { useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pointsData from './locations.json';
import MediaCard from './MediaCard';

function App() {
  const { center, bounds } = useMemo(() => {
    const points = pointsData.points.map(point => [point.latitude, point.longitude]);
    const bounds = L.latLngBounds(points);
    const center = bounds.getCenter();
    return { center, bounds };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer 
        center={center}
        bounds={bounds}
        style={{ height: '100%', width: '100%' }}
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
                category={point.category}
                address={point.address}
              />
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
