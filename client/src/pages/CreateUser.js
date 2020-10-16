import React, { Component } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
import CreateAccount from '../components/CreateAccount/CreateAccount'



class CreateUser extends Component {

    render() {
        return (

            <>
                <CreateAccount />
                <a href="/" >Back to Login</a>


            </>
        );
    }
}

export default CreateUser;