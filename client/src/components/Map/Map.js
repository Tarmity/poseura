import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import {  formatRelative, } from 'date-fns';
// import usePlacesAutocomplete, {getGeocode, getLatLng, } from "use-places-autocomplete";
// import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,} from "@reach/combobox";
import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";
import './Map.css';

const libraries =  ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};
const center = {
    lat: -27.4698,
    lng: 153.0251,
};
const options = {
    // styles: ,
    disableDefaultUI: true,
    zoomControl: true,
}


export default function Map () {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NOT_SECRET_CODE,
        libraries,
    });
    const [ markers, setMarkers ] = React.useState([]);

    //call back function that stops re-rending the map every time a marker is placed on the map.
    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current, 
            {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date(), 
        }
    ]);
    }, [])

    //call back function that stops the map re-rending
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);



    if(loadError) return "Error loading maps ";
    if(!isLoaded) return "Loading Maps";


    return <div>
        <h1 className="mapHeader">Photographer 📷 </h1>
        <GoogleMap classname="googleMap" 
        mapContainerStyle ={mapContainerStyle} 
        zoom={8} 
        center={center} 
        options={options}
        onClick={onMapClick}  
        onLoad={onMapLoad}
    >
        {markers.map((marker) => (
        <Marker
         key={marker.time.toISOString()} 
         position={{lat: marker.lat, lng: marker.lng}}
         icon={{
             url:"https://webstockreview.net/images/photographer-clipart-svg-3.png",
             scaledSize: new window.google.maps.Size(30,30),
             origin: new window.google.maps.Point(0,0),
             anchor: new window.google.maps.Point(15,15)
         }}
         />
         ))}

        </GoogleMap>
    </div>
}

