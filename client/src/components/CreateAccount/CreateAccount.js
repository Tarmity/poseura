import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from "axios";
import { Redirect } from 'react-router-dom';


class CreateAccount extends Component {

    state = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        redirectTo: null
    }

    handleInput = event => {
        event.preventDefault();
        console.log(process.env)
        const { name, value } = event.target;
        this.setState({
            [ name ]: value
        })

    }

    submit = (event) => {
        event.preventDefault();
        axios.post("/api/create-user", this.state)
            .then((response) => {
                console.log(response)
                if (response.data) {
                    alert("Sign up successful" )
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/'
                    })
                } else {
                    console.log('sign-up error');
                }
            }).catch(error => {
                console.log('Sign up server error')
                console.log(error)
            })  

    } 

    render() {

        if (this.state.redirectTo) {
            return <Redirect to ={{ pathname: this.state.redirectTo }} />
        } else {

        return (

            <>
            <h1 style={{  fontSize: "80px", color: '#23C0AD', textAlign: 'center', marginTop: '70px', marginBottom: '20px', backgroundColor: '#E6E6E6', height: '100px',opacity: '0.7',}}>Create Account</h1>
                <Container style={{ backgroundColor: '#E6E6E6', height: '650px', width: '500px', textAlign: 'center', opacity: '0.6', marginTop: '100px' }}>
                    <Form onSubmit={this.submit} style= {{ margin: "50px 50px 50px 50px"}}>
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label style={{ color: "#23C0AD", fontSize: '30px'}}>First Name</Form.Label>
                            <Form.Control name="firstName" type="firstName" onInput={this.handleInput} placeholder="First Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label style={{ color: "#23C0AD", fontSize: '30px'}}>Last Name</Form.Label>
                            <Form.Control onInput={this.handleInput} name="lastName" type="lastName" placeholder="Last Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label style={{ color: "#23C0AD", fontSize: '30px'}}>Phone Number</Form.Label>
                            <Form.Control onInput={this.handleInput} name="phone" type="phoneNumber" placeholder="Phone Number" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: "#23C0AD", fontSize: '30px'}}>Email address</Form.Label>
                            <Form.Control onInput={this.handleInput} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ color: "#23C0AD", fontSize: '30px'}}>Password</Form.Label>
                            <Form.Control onInput={this.handleInput} name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ backgroundColor: "#23C0AD", borderColor: "#23C0AD", height: "40px", width: "100px"}}>
                            Submit
                    </Button>
                   
                    </Form>
                    <div>
                    <a href="/" style={{ color: '#FF5E0E', fontSize: '20px' }} >Back to Login</a>
                    </div>
                </Container>
            </>
        );
    }
}
}

export default CreateAccount;