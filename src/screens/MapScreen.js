import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

let map;

const MapScreen = props => {

    useEffect(() => {
        map = L.map('map', { minZoom: 6, zoomControl: false, zoomDelta: 0.5, maxBounds:[[49, 14.12], [54.84, 24.15]] }).setView([52.07317851003756, 19.49580627724308], 6);
        L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env["REACT_APP_API_KEY"]}`).addTo(map);
    }, []);

    return (
        <main style={{
            paddingTop: '0',
            marginTop: '0',
            width: '100vw',
            height: '90vh',
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'center',
            backgroundColor: 'pink'
        }}
        >
            <div id='map' style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                zIndex: 1
            }} />
        </main>
    )
}

export default MapScreen;