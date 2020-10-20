import React, { Component, } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

import UserLocation from '../UserLocation/UserLocation';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            // showingInfoWindow: false,
            // activeMarker: {},
            // selectedPlace: {},
        };
    };

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
                 <UserLocation/>
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
                    <Marker />
                    

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