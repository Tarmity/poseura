import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative, } from 'date-fns';
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";
import './Map.css';

const libraries = ["places"]
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


export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_NOT_SECRET_CODE,
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

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

    // call back function gets the lat and log and returns the map in that location
    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error loading maps ";
    if (!isLoaded) return "Loading Maps";


    return <div>
        <h1 className="mapHeader">Poseura <span role="img" aria-label="camera">📷</span></h1>
        <Search panTo={panTo} />
        <Locate panTo={panTo} />


        <GoogleMap classname="googleMap"
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
            {markers.map((marker) => (
                <Marker
                    key={marker.time.toISOString()}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    icon={{
                        url: "https://webstockreview.net/images/photographer-clipart-svg-3.png",
                        scaledSize: new window.google.maps.Size(30, 30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15)
                    }}
                    onClick={() => {
                        setSelected(marker);
                    }}
                />
            ))}
            {selected ? (
                <InfoWindow position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h2> Photography Shoot </h2>
                        <p>Time {formatRelative(selected.time, new Date())}</p>
                    </div>
                </InfoWindow>) : null}

        </GoogleMap>
    </div>
}

function Locate({ panTo }) {
    return <button className="locate" onClick={() =>{
        navigator.geolocation.getCurrentPosition((position) => {
            panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        }, () => null);
    }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZBia84Q0tjN87tSgU18k6xxKLSuNw_5Mm4A&usqp=CAU" alt="compass -Locate me" />
    </button>
}

function Search({ panTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => -27.4698, lng: () => 153.0251 },
            radius: 200 * 1000,
        }
    });
    return (
        <div className="search">
            <Combobox onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions()

                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                    panTo({ lat, lng });
                } catch (error) {
                    console.log("error!")
                }
            }}
            >
                <ComboboxInput value={value} onChange={(event) => {
                    setValue(event.target.value);
                }}
                    disabled={!ready}
                    placeholder="Search Places ..."
                />
                <ComboboxPopover>
                    <ComboboxList>
                    {status === "OK" &&
                        data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}

