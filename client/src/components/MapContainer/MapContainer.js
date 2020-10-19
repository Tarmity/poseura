import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    } 

    onMapClicked = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

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
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>

                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: -33.8670, lng: 151.2093 }}
                    draggable={true}
                />          
               
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey:
        
    process.env.REACT_APP_NOT_SECRET_CODE
})(MapContainer)