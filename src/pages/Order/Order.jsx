import React, { createRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './Order.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hla2l0IiwiYSI6ImNrc2psMjM2ajAwOTgyb3BuejRoZzhzNzcifQ.2OQWhKvtLISFfBiyrFV-Cw';

export const Order = () => {
    const mapContainerRef = createRef(null);

    const [lng, setLng] = useState(37.6160);
    const [lat, setLat] = useState(55.7515);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Unmount
        return () => map.remove();
    });

    return (
        <div className="map-container" ref={mapContainerRef}></div>
    );
};