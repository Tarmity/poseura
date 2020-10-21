import React, { Component } from 'react';
import { } from 'react-bootstrap';
// import MapContainer from '../components/MapContainer/MapContainer'
// import UserMap from '../components/UserMap/UserMap';
// import { GoogleApiWrapper } from 'google-maps-react';
import Map from '../components/Map/Map';


export default class Booking extends Component {

    render() {
        return (

            <>
       
            {/* <h1 style={{ fontSize: "100px" }}>Booking</h1> */}
            {/* <MapContainer />  */}
            
            {/* <UserMap />  */}
            <Map />
            </>
        );
    }
}

 

// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_NOT_SECRET_CODE
// })(Booking)