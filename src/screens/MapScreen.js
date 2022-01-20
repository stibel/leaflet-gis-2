import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { unis } from '../data/unis';
import marker from '../data/marker.png'

let map;

const generateLayer = (icon, data) => {

    const marker = new L.icon({
        iconUrl: icon,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
    })

    return L.geoJSON(data, {
        pointToLayer: (feature, latlng) =>
            L.marker(latlng, { icon: marker }).on('mouseover', function () {
                this.bindPopup(
                    () =>
                        feature.properties.name
                ).openPopup().on('click', () =>
                    map.flyTo(latlng, 20)
                )
            })
    })
}
const MapScreen = props => {

    const [universities, setUniversities] = useState(generateLayer(marker, unis))
    
    useEffect(() => {
        map = L.map('map', { minZoom: 6, zoomControl: false, zoomDelta: 0.5, maxBounds: [[49, 14.12], [54.84, 24.15]] }).setView([52.07317851003756, 19.49580627724308], 6);
        L.tileLayer.wms(`https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution`,
            {
                layers: 'Raster',
                format: 'image/png'
            }).addTo(map);

        L.tileLayer.wms(`https://mapy.geoportal.gov.pl/wss/service/PZGIK/NMT/GRID1/WMS/ShadedRelief`,
            {
                layers: 'Raster',
                format: 'image/png',
                opacity: .25,
                minZoom: 10
            }).addTo(map);
        map.addLayer(universities)
    }, [universities]);

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
            {/* <LayerControl /> */}
        </main>
    )
}

export default MapScreen;