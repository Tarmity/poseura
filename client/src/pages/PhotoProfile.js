import React from 'react';
import { Form, Button, Container, } from 'react-bootstrap';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';



export default function PhotoProfile() {

    function AlertSuccess() {
        let message ="Thank you, you profile was created successful";
        alert(message);
        } 


    return (
        <>
            {/* NAvBar from the Nabar component  */}
            <NavBar />

            {/* h1 heading and styling for the login page */}
            <h1 style={{ fontSize: "80px", color: '#23C0AD', textAlign: 'center', marginTop: '40px', marginBottom: '20px', backgroundColor: '#E6E6E6', height: '100px', opacity: '0.7', }}>Create Photographer Profile</h1>
         
           {/* Container for the photo profile form */}
            <Container style={{ backgroundColor: '#E6E6E6', height: '930px', width: '700px', textAlign: 'center', opacity: '0.6', marginTop: '60px' }}>
                <Form style={{ margin: "50px 50px 50px 50px" }}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px' }}>Name</Form.Label>
                        <Form.Control name="Name" type="Name" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px' }}>Example select</Form.Label>
                        <Form.Control as="select">
                            <option>Amateur</option>
                            <option>Professional</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px' }}>About Me</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px' }}>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="CareerPath">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px' }}>Career Path</Form.Label>
                        <Form.Control as="select">
                            <option>Landscape</option>
                            <option>Action</option>
                            <option>Street</option>
                            <option>Portrait</option>
                            <option>Underwater</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="SuburbInput">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px' }}>Suburb you live In</Form.Label>
                        <Form.Control type="name" placeholder="Suburb" />
                    </Form.Group>

                    <Form.Group controlId="SuburbInput">
                        <Form.Label style={{ color: "#23C0AD", fontSize: '30px',  }}>Profile Picture</Form.Label>
                        <input type="file" style={{ color: "#23C0AD", fontSize: '20px', marginRight: '10px', marginLeft: '70px' }}></input>
                    </Form.Group>


                    <Button 
                    onClick={AlertSuccess}
                    variant="primary" type="submit" style={{ backgroundColor: "#23C0AD", borderColor: "#23C0AD", height: "40px", width: "100px" }}>
                        Submit
                         </Button>

                </Form>
                <div>
                    <a href="/home" style={{ color: '#FF5E0E', fontSize: '20px' }} >Back to Home</a>
                </div>
            </Container>
            <Footer />
        </>
    )

};

