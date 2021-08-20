import React, { createRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hla2l0IiwiYSI6ImNrc2psMjM2ajAwOTgyb3BuejRoZzhzNzcifQ.2OQWhKvtLISFfBiyrFV-Cw';

const DEFAULTS = {
    lng: 37.6160,
    lat: 55.7515,
    zoom: 14
};

export const Map = () => {
    const mapContainerRef = createRef(null);

    const [lng, setLng] = useState(DEFAULTS.lng);
    const [lat, setLat] = useState(DEFAULTS.lat);
    const [zoom, setZoom] = useState(DEFAULTS.zoom);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/chekit/cksksm53n20af17pjblj9oo1a',
            center: [lng, lat],
            zoom: zoom,
        });

        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className="map-container" ref={mapContainerRef}></div>
    );
};