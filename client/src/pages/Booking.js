import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map';
import PhotographerCard from '../components/PhotographerCard/PhotographerCard'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar';


export default function Booking(props) {

    const [photographer, setPhotographer] = React.useState()

    const setPhotographerDetails = (photographer) => {
        setPhotographer(photographer)
        // Set the state of the displayed photographer 
    }


    return (

        <>
             <NavBar />
            <h1 style={{ fontSize: "80px", color: '#23C0AD', textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>Lets Find You A Photgrapher</h1>

            <Map photographerClicked={setPhotographerDetails} />


            {photographer ? (
                <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center'}}>

                    <PhotographerCard
                        image={photographer.image}
                        name={photographer.name}
                        careerPath={photographer.careerPath}
                        skillLevel={photographer.skillLevel}
                        email={photographer.email}
                        about={photographer.about}

                    />
                </div>

            ) : null}
            <Footer />

        </>
    );

}


