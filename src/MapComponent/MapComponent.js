import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ReactDOMServer from 'react-dom/server';
import L from 'leaflet';
import { FaMapMarkerAlt } from "react-icons/fa";

const MapComponent = ({ teams }) => {
    const center = [45.9432, 24.9668]; // Coordinates for the center of Romania
    const iconHtml = ReactDOMServer.renderToString(<FaMapMarkerAlt style={{ color: 'red', fontSize: '24px' }} />);
    const customIcon = new L.divIcon({
        html: iconHtml,
        className: 'custom-icon',
        iconSize: L.point(30, 30),
        iconAnchor: L.point(15, 30)
    });

    return (
        <MapContainer center={center} zoom={7} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {teams.map((team, index) => (
                <Marker key={index} position={[team.latitude, team.longitude]} icon={customIcon}>
                    <Popup>
                        <div>
                            <strong>{team.name}</strong><br />
                            {team.description}<br />
                            <img src={team.image} alt={team.name} style={{ width: '100px', height: 'auto' }} />
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapComponent;
