import React, { Component, } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null

            // showingInfoWindow: false,
            // activeMarker: {},
            // selectedPlace: {},
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        // console.log(position.coords.latitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverseGeocodeCoordinates()

    }

    reverseGeocodeCoordinates() {
     fetch (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${process.env.REACT_APP_SECRET_CODE}`)
     .then(response => response.json())
     .then(data => console.log(data))
    //     this.setState({
    //      userAddress: data.results[0].formatted_address
    //  }))
    //  console.log(data)
     .catch(error => alert(error))
    }

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


    // onMarkerClick = (props, marker, e) => {
    //     this.setState({
    //         selectedPlace: props,
    //         activeMarker: marker,
    //         showingInfoWindow: true
    //     });
    // }

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

                <Map style={{ width: '600px', height: '600px' }}
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        // lat: {...this.state.latitude},
                        // lng: {...this.state.longitude}
                        lat: -33.8688,
                        lng: 151.2093
                    }}
                // onClick={(event) => {
                //     console.log(event)
                // }}

                // onClick={this.onMapClicked}
                >
                    <Marker
                    position= {{
                         lat: {...this.state.latitude},
                        lng: {...this.state.longitude}
                    }}
                    />

                    {/* <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>

                    <Marker onClick={this.onMarkerClick}
                        title={'The marker`s title will appear as a tooltip.'}
                        name={'SOMA'}
                        position={{ lat: -33.8870, lng: 151.2093 }}
                        draggable={true}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow> */}

                </Map>

            </>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_NOT_SECRET_CODE
})(MapContainer)