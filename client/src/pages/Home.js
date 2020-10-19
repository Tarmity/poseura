import React from 'react';
import JumboHome from '../components/JumboHome/JumboHome';
import {  Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <>
            <h1 style={{ fontSize: "100px" }}>Hello </h1>
            <JumboHome />
            <Container>
                <Row>
                    <Col><Link to="/booking">Blog</Link></Col>
                    <Col>Make A booking</Col>
                    <Col>Create Photographer Profile</Col>
                </Row>
            </Container>

        </>
    )
}

export default Home; 