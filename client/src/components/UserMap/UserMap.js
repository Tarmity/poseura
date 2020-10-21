import React, { Component } from 'react';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

export default function UserMap() {

    // =============================== PlacesAutocomplete =============================================== 

    const [address, setAddress] = React.useState(" ");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null
    });
    // =============================== PlacesAutocomplete =============================================== 

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        // console.log(latLng)
        setAddress(value)
        setCoordinates(latLng);
    };

    // =============================== PlacesAutocomplete =============================================== 


    return (
        <>
            <div>
                {/* =============================== PlacesAutocomplete ===============================================  */}
                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

                        <div>
                            <h1>Places AutoComplete</h1>
                            <p>Latitude: {coordinates.lat}</p>
                            <p>Latitude: {coordinates.lng}</p>

                            <input {...getInputProps({ placeholder: "Search Places ...." })} />

                            <div>
                                {loading ? <div>......loading</div> : null}

                                {suggestions.map(suggestion => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                    };

                                    return (
                                        <div {...getSuggestionItemProps(suggestion, { style })} >
                                            {suggestion.description}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                {/* =============================== PlacesAutocomplete ===============================================  */}
            </div >
        </>
    )
}
