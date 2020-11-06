import React from 'react';
import { Container, Card } from 'react-bootstrap';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';



export default function Blog() {


    return (
        <>
            <NavBar />
            <h1 style={{ fontSize: "80px", color: '#23C0AD', textAlign: 'center', marginTop: '70px', marginBottom: '20px', backgroundColor: '#E6E6E6', height: '100px', opacity: '0.7', }}>Latest News</h1>
            <Container>
                <Card>
                    <Card.Img variant="top" src="https://cdn.mos.cms.futurecdn.net/GDBqnEibpvimpo7ks6xGFD.jpg" />
                    <Card.Body>
                        <Card.Text>
                            Check out the latest news and great deals from Canon.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1288/5975/files/GloA7C2_1200x.png?v=1600226464" />
                    <Card.Body>
                        <Card.Text>
                           Check out the latest news and great deals from Sony.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Container>

            <Footer />
        </>
    )
}