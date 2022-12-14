import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import './MapObject.css'

const position = [51.505, -0.09];
window.dispatchEvent(new Event('resize'));
const Map = () => {
	return (
		<div>
			   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>  
		</div>
	);
};

export default Map;
