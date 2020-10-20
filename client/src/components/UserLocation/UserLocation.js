import React, { Component, } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class UserLocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
    };

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    getCoordinates(position) {
        // console.log(position.coords.latitude);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.reverseGeocodeCoordinates()

    };

    reverseGeocodeCoordinates() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=${process.env.REACT_APP_SECRET_CODE}`)
            .then(response => response.json())
            .then(data => this.setState({
                 userAddress: data.results[1].formatted_address
             }))
            .catch(error => alert(error))
    };

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

    render() {
        return(
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

        )
    }
}

export default UserLocation;
// ${process.env.REACT_APP_SECRET_CODE}