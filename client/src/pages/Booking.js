import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map';
import PhotographerCard from '../components/PhotographerCard/PhotographerCard'


export default function Booking(props) {

    const [photographer, setPhotographer] = React.useState()

    const setPhotographerDetails = (photographer) => {
        setPhotographer(photographer)
        // Set the state of the displayed photographer 
    }


    return (

        <>

            <h1 style={{ textAlign:'center', color: '#23C0AD', margin: '20px 0 20px 0'}}>Lets find you Photgrapher</h1>
            <Link style={{ color: '#FF5E0E'}}to="/home">Home</Link>

            <Map photographerClicked={setPhotographerDetails} />

            {photographer ? (
                <PhotographerCard
                    image={photographer.image}
                    name={photographer.name}
                    careerPath={photographer.careerPath}
                    skillLevel={photographer.skillLevel}
                    email={photographer.email}
                    about={photographer.about}

                />
            ) : null}
            
        </>
    );

}


