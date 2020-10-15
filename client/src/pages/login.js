import React, { Component } from 'react';
import SignIn from '../components/userSignIn/SignIn';


class Login extends Component {


    render(){
        return(
            <>
          <SignIn />
          <a href ='/createuser'>Create Account</a>
          </>
        )
    }
}

export default Login;