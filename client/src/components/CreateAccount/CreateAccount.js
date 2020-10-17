import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from "axios";


class CreateAccount extends Component {

    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
    }

    handleInput = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [ name ]: value
        })

    }

    submit = (event) => {
        event.preventDefault();
        axios.post("/api/create-user", this.state)
            .then((response) => {
                console.log(response);
            })

    } 

    render() {
        return (

            <>
            <h1 style={{ fontSize: "100px" }}>Create Account</h1>
                <Container style={{ border: "solid" }}>
                    <Form onSubmit={this.submit}>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstName" type="firstName" onInput={this.handleInput} placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onInput={this.handleInput} name="lastName" type="lastName" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onInput={this.handleInput} name="phone" type="phoneNumber" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onInput={this.handleInput} name="email" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onInput={this.handleInput} name="password" type="password" placeholder="Password" />
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