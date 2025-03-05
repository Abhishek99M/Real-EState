import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png"
import iconshadow from "leaflet/dist/images/marker-shadow.png"
import * as ELG from "esri-leaflet-geocoder"

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconshadow
})
L.Marker.prototype.options.icon = DefaultIcon

const GeoCoderMarker = ({address}) => {
    const map = useMap()
    const [position, setPosition] = useState([60, 19])

useEffect(() => {
    console.log("Address changed:", address); // Debugging line
    ELG.geocode().text(address).run((err, results, response) => {
        if (results?.results?.length > 0) {
            const { lat, lng } = results.results[0].latlng;
            console.log("Geocoded Coordinates:", lat, lng);
            setPosition([lat, lng]);
            map.flyTo([lat, lng], 11);
        } else {
            console.error("Geocode failed:", err);
        }
    });
}, [address]);

    return (
        <Marker position={position} icon={DefaultIcon}>
            <Popup />
        </Marker>
    )
}

export default GeoCoderMarker