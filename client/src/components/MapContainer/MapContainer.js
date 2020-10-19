import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (

            <Map style={{ width: '400px', height: '400px' }}
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: -33.8688,
                    lng: 151.2093
                }}
                onClick={this.onMapClicked}
            >

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:
        
    process.env.REACT_APP_NOT_SECRET_CODE
})(MapContainer)