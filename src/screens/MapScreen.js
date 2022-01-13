import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import LayerControl from '../components/LayerControl/LayerControl';
import { URLS } from '../globals/URLS';

let map;

const MapScreen = props => {

    // const [baseLayer, setBaseLayer] = useState(
    //     L.tileLayer(URLS.base, { id: 0 })
    // )
    // const [orthophoto, setOrthophoto] = useState(
    //     L.tileLayer.wms(URLS.orthophoto,
    //         {
    //             id: 1,
    //             layers: 'Raster',
    //             format: 'image/png'
    //         })
    // )

    useEffect(() => {
        map = L.map('map', { minZoom: 6, zoomControl: false, zoomDelta: 0.5, maxBounds: [[49, 14.12], [54.84, 24.15]] }).setView([52.07317851003756, 19.49580627724308], 6);
        // L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env["REACT_APP_API_KEY"]}`).addTo(map);
        L.tileLayer.wms(`https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution`,
            {
                layers: 'Raster',
                format: 'image/png'
            }).addTo(map);
        L.tileLayer.wms(`https://mapy.geoportal.gov.pl/wss/service/PZGIK/NMT/GRID1/WMS/ShadedRelief`,
            {
                layers: 'Raster',
                format: 'image/png',
                opacity: .25
            }).addTo(map);
        // L.control.layers(baseLayer, orthophoto).addTo(map)
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
            <LayerControl />
        </main>
    )
}

export default MapScreen;