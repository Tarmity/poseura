import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            redirectTo: null
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    };
 
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/', {
            email: this.state.email,
            password: this.state.password
        })
        .then (response => {
            console.log('login response: ')
            console.log(response)
            if(response.status === 200) {
                //update App.jsx state
                this.state.updateUser({
                    loggedIn: true,
                    firstName: response.data.firstName
                })

                //update the state to redirect to home
                this.setState({
                    redirectTo: '/home'
                })
            }
        }).catch (error => {
            console.log('login error: ')
            console.log(error);
        })
    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to ={{ pathname: this.state.redirectTo }} />
        } else {

        
        return (

            <>
            <h1 style={{ fontSize: "100px" }}>Login</h1>
                <Container style={{ border: "solid" }}>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email"  />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name= "password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleSubmit} type="submit">
                            Login
                    </Button>
                    </Form>
                </Container>


            </>
        );
    }
}
}

export default SignIn;