import React, { useEffect, useRef } from 'react';
import { useStore } from 'react-redux';
import styled from 'styled-components';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN;

const DEFAULTS = {
    lng: 4.8936,
    lat: 52.3700,
    zoom: 13.3
};

const ROUTE_LAYER_ID = 'route';

const getSourceData = coordinates => ({
    type: "Feature",
    properties: {},
    geometry: {
        type: "LineString",
        coordinates
    }
});

const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 13.3
    });

    if (map.isStyleLoaded()) {
        const data = getSourceData(coordinates);

        if (map.getLayer(ROUTE_LAYER_ID)) {
            map.getSource(ROUTE_LAYER_ID).setData(data)
        } else {
            map.addLayer({
                id: ROUTE_LAYER_ID,
                type: "line",
                source: {
                    type: "geojson",
                    data
                },
                layout: {
                    "visibility": "visible",
                    "line-join": "round",
                    "line-cap": "round"
                },
                paint: {
                    "line-color": "#ffc617",
                    "line-width": 8
                }
            });
        }
    }
};

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const Map = () => {
    const mapContainerRef = useRef(null);
    const map = useRef(null);

    const store = useStore();
    const { currentRoute } = store.getState();

    useEffect(() => {
        if (!map.current) {
            const { lng, lat, zoom } = DEFAULTS;

            map.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/chekit/cksksm53n20af17pjblj9oo1a',
                center: [lng, lat],
                zoom,
            });
        }

        drawRoute(map.current, currentRoute);
    }, [currentRoute, mapContainerRef]);


    return (
        <MapContainer ref={mapContainerRef} />
    );
};