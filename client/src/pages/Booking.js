import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map';
import PhotographerCard from '../components/PhotographerCard/PhotographerCard'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/NavBar';


export default function Booking(props) {

    const [photographer, setPhotographer] = React.useState()
    const [lgShow, setLgShow] = React.useState(false);

    const setPhotographerDetails = (photographer) => {
        setPhotographer(photographer)
        // Set the state of the displayed photographer 
    }


    return (

        <>
            <NavBar />
            <h1 style={{
                fontSize: "80px",
                color: '#23C0AD',
                textAlign: 'center',
                marginTop: '30px',
                marginBottom: '20px',
                backgroundColor: '#E6E6E6',
                height: '100px',
                opacity: '0.7',
            }}>Search For A Photgrapher</h1>

            <Map photographerClicked={setPhotographerDetails} />


            {photographer ? (
                <div style={{ minHeight: '300px', display: 'flex', alignItems: 'center' }}>

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


            <Button onClick={() => setLgShow(true)} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundColor: "#23C0AD", borderColor: "#23C0AD" }}>Book Photographer</Button>

            {photographer ? (
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg" >
                       Book {photographer.name} For you Special Occassion  
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Is your Photo shoot for?</Form.Label>
                                <Form.Control as="select">
                                    <option>Personal</option>
                                    <option>Business</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect2">
                                <Form.Label>What is the special occassion for the shoot?</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>Family</option>
                                    <option>Portrait</option>
                                    <option>Party</option>
                                    <option>Wedding</option>
                                    <option>Maternity</option>
                                    <option>Graduation</option>
                                    <option>Engagement</option>
                                    <option>Dating</option>
                                    <option>Baby</option>
                                    <option>Pet</option>
                                    <option>Landscape</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Where is your Photoshoot taking place </Form.Label>
                                <Form.Control as="textarea" placeholder="Address" rows={1} />
                            </Form.Group>
                        </Form>
                        <Button variant="primary" type="submit" style={{ backgroundColor: "#23C0AD", borderColor: "#23C0AD", height: "40px", width: "100px" }}>Book</Button>
                    </Modal.Body>
                </Modal>
            ) : null}

            <Footer />

        </>
    );

}


