import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';





class SignIn extends Component {

    state ={

    }

    handleSubmit = event => {
        event.preventDefault();
        })


    render() {
        return (

            <>
                <Container style={{ border: "solid" }}>
                    <Form onSubmit = {handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form>
                </Container>


            </>
        );
    }
}

export default SignIn;