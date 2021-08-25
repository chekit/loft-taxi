import React, { createRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import './Map.scss';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;

const DEFAULTS = {
    lng: 4.8936,
    lat: 52.3700,
    zoom: 13.3
};

export const Map = () => {
    const mapContainerRef = createRef(null);
    const { lng, lat, zoom } = DEFAULTS;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/chekit/cksksm53n20af17pjblj9oo1a',
            center: [lng, lat],
            zoom,
        });

        // Unmount
        return () => map.remove();
    });

    return (
        <div className="map-container" ref={mapContainerRef}></div>
    );
};