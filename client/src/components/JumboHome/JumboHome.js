import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import './JumboHome.css';



function JumboHome() {



  return (

    <Jumbotron className="jumbo" fluid >
      <Container
        style={{
          backgroundColor: '#454545',
          textAlign: 'center',
          width: '800px',
          opacity: '0.6',
        }}>
        <h1 className="header">Welcome to Poseur</h1>
        <p className="para">
          A community of photographers capturing moments in time to cherish
              </p>
      </Container>
    </Jumbotron>

  )

}

export default JumboHome;