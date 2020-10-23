import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class SignIn extends Component {

    constructor() {
        super()
        this.state = {
            email: " ",
            password: " ",
            redirectTo: null
        }
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    };

   // handles the inputs of the form
    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [ name ]: value
        })
    };
    // Handles the sumbmit request on the from to login
    handleSubmit = event => {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password,
        })
        .then (response => {
            console.log('login response: ')
            // console.log(response)
            if(response.status === 200) {
                //update App.jsx state
                this.props.updateUser({
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
                <Container style={{  height: "310px", width: "500px", textAlign: 'center', backgroundColor: '#E6E6E6', opacity: '0.8' }}>
                    <Form onSubmit={this.handleSubmit} style={{ margin: "50px 50px 50px 50px"}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{ color: "#23C0AD", fontSize: '30px'}}><strong>Email Address</strong></Form.Label>
                            <Form.Control name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter email"  />
                            {/* <Form.Text className="text-muted"> We'll never share your email with anyone else. </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label style={{ color: '#23C0AD', fontSize: '30px'}}><strong>Password</strong></Form.Label>
                            <Form.Control name= "password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{ backgroundColor: "#23C0AD", borderColor: "#23C0AD", height: "40px", width: "100px", marginBottom: '10px' }}>
                            Login
                        </Button>
                        <div>
                        <a href='/createuser' style={{ color: '#FF5E0E', fontSize: '20px'}}> Click here to a New Create Account</a>
                        </div>
                    </Form>
                
                </Container>
                


            </>
        );
    }
}
}

export default SignIn;