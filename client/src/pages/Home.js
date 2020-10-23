import React from 'react';
import JumboHome from '../components/JumboHome/JumboHome';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Home() {

    return (
        <>

            <JumboHome />
            <Container>
                <Row>
                    <Col><Card style={{ width: '18rem', borderColor: "#487AFA"  }}>
                            <Card.Img variant="top" src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1543483387-reinhart-julian-1145947-unsplash.jpg" />
                            <Card.Body>
                                <Card.Title>Latest News</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button style={{ backgroundColor: "#487AFA", borderColor: "#487AFA", color: "#ffffff", height: "40px", width: "100px" }}>Browse</Button>
                            </Card.Body>
                        </Card></Col>

                    <Col>
                        <Card style={{ width: '18rem', borderColor: "#F1E821" }}>
                            <Card.Img variant="top" src="https://starartists.net/wp-content/uploads/2020/05/1518438834-shutterstock_675563017.jpg" />
                            <Card.Body>
                                <Card.Title>Make a Booking</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button style={{ backgroundColor: "#F1E821", borderColor: "#F1E821", color: "#ffffff", height: "40px", width: "100px" }}><Link style={{color: "#000000"}} to="/booking">Booking</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col>
                    <Card style={{ width: '18rem', borderColor: "#23C0AD" }}>
                            <Card.Img variant="top" src="https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg" />
                            <Card.Body>
                                <Card.Title>Photographer Profile</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <Button variant="primary" style={{ backgroundColor: "#23C0AD", borderColor: "#23C0AD", height: "40px", width: "100px" }}>Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Home; 