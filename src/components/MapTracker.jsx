import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

const route = [
    [17.3850, 78.4867],
    [17.2000, 78.0000],
    [16.8000, 77.6000],
    [16.2000, 77.2000],
    [15.3173, 75.7139]
];

function MapTracker({ setProgress, setStatus }) {
    const [position, setPosition] = useState(route[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                if (prev < route.length - 1) {
                    const next = prev + 1;
                    setPosition(route[next]);

                    const percent = Math.floor((next / (route.length - 1)) * 100);
                    setProgress(percent);

                    if (percent < 40) setStatus("On Time");
                    else if (percent < 90) setStatus("Slight Delay");
                    else setStatus("Reached");

                    return next;
                }
                return prev;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <MapContainer center={position} zoom={6} style={{ height: "400px", width: "100%" }}>
            <TileLayer
                attribution="OpenStreetMap"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>Bus Live Location 🚍</Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapTracker;
