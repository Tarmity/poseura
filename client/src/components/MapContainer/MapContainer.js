import React, { Component, } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";


export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ======================= GeoLocation ===================================
            latitude: null,
            longitude: null,
            userAddress: null,
            // ======================= GeoLocation ===================================
            // =============================== PlacesAutocomplete ===============================================
            address: " ",

            // =============================== PlacesAutocomplete ===============================================
            // showingInfoWindow: false,
            // activeMarker: {},
            selectedPlace: {},
        };
        // ======================= GeoLocation =======================================
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);

        // ======================= GeoLocation ===========================================
    };
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    // ======================= GeoLocation =======================================
    getCoordinates(position) {
        // console.log(position.coords.latitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverseGeocodeCoordinates()

    };
    // ======================= GeoLocation =======================================
    reverseGeocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${process.env.REACT_APP_SECRET_CODE}`)
            .then(response => response.json())
            .then(data => this.setState({
                userAddress: data.results[1].formatted_address
            }))
            .catch(error => alert(error))
    };
    // ======================= GeoLocation =======================================
    handleLocationError(error) {

        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;
            default:
                alert("An unknown error occurred.")
        }
    }
    // ======================= GeoLocation =======================================

    // =============================== PlacesAutocomplete =============================================== 
    handleChange = address => {
        this.setState({ address });
    }

    // async handleSelect() {
    //     const response = await geocodeByAddress(response)
    //     console.log(response)
    // } catch (error) {
    //     console.log(error);
    // }

    handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };

// =============================== PlacesAutocomplete =============================================== 

// ======Function to show infowindow on markers
onMarkerClick = (props, marker, e) => {
    this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });
}

// onMapClicked = e => {
//     if (this.state.showingInfoWindow) {
//         this.setState({
//             showingInfoWindow: false,
//             activeMarker: null
//         })
//     }
// };

render() {
    return (
        <>
            {/* ======================= GeoLocation ======================================= */}
            <div>
                <h2>
                    React Geolocation
                    </h2>
                <button onClick={this.getLocation}>Get coordinates</button>
                <h4>HTML5 Coordinates</h4>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
                <h4>Google Maps Reverse Geocoding</h4>
                <p>Address: {this.state.userAddress}</p>
            </div>
            {/* ======================= GeoLocation ====================================== */}
            {/* =============================== PlacesAutocomplete =============================================== */}
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >

                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input {...getInputProps({
                            placeholder: "Search Places ....",
                            className: 'location-search-input',
                        })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>loading.....</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : ' suggestion-item';
                                const style = suggestion
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                )}

            </PlacesAutocomplete>
            <br>
            </br>

            {/* =============================== PlacesAutocomplete =============================================== */}

            <Map style={{ width: '600px', height: '600px' }}
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: -27.4698,
                    lng: 153.0251
                }}
            >
                {/* ======================= GeoLocation  Marker====================================== */}
                <Marker onClick={this.onMarkerClick}
                    title={'This is your current location.'}
                    name={'HEY! You Are here'}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    position={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
                {/* ======================= GeoLocation Marker ====================================== */}

                <Marker onClick={this.onMarkerClick}
                    name={'Richard Little'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>

                {/* =============================== PlacesAutocomplete =============================================== */}

                <Marker onClick={this.onMarkerClick}
                    title={'would you like to check this place out.'}
                    name={'IS This the Spot! '}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    position={{
                        address: this.state.address
                    }}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>

                {/* =============================== PlacesAutocomplete =============================================== */}

            </Map>

        </>
    );
}
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_NOT_SECRET_CODE
})(MapContainer)
// ${process.env.REACT_APP_SECRET_CODE}