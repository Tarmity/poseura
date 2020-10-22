import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map'; 
import PhotographerCard from '../components/PhotographerCard/PhotographerCard'


export default function Booking() {

    const [photographer, setPhotographer] = React.useState()

    const setPhotographerDetails = (photographer) => {
        setPhotographer(photographer)
        // Set the state of the displayed photographer 
    }

    return (

        <>
    
        <h1 style={{ fontSize: "100px" }}>Booking</h1>
        <Link to="/createbooking">Make A booking</Link>

        <Map photographerClicked={setPhotographerDetails}/>
        
        <PhotographerCard />

        </>
    );
    
}

 
