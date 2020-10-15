import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


class CreateAccount extends Component {

    render() {
        return (

            <>
                <Container style={{ border: "solid" }}>
                    <Form>
                    <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="FirstName" placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="LastName" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="PhoneNumber" placeholder="Phone Number" />
                        </Form.Group>

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
                    <Form.Text className="text-muted">
                       
                    </Form.Text>
                </Container>
            </>
        );
    }
}

export default CreateAccount;