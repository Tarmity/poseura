import React, { Component } from 'react';
import SignIn from '../components/userSignIn/SignIn';
import axios from 'axios';


class Login extends Component {
    
    constructor() {
        super()
        this.state = {
          loggedIn: false,
          firstname: null
        }
   
        this.getUser = this.getUser.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateUser  =this.updateUser.bind(this)
      }
   
      componentDidMount(){
        this.getUser()
      }
   
      updateUser (userObject) {
        this.setState(userObject)
      }
   
      getUser(){
        axios.get('/api/login').then(response => {
         console.log('Get user resopnse: ')
         console.log(response.data)
         if (response.data.user) {
           console.log('Get user: there is a user saved in the server session: ')
   
           this.setState({
             loggedIn: true,
             firstName: response.data.user.firstName
           })
         } else {
           console.log('Get user: no user');
           this.setState({
             loggedIn: false,
             firstname: null
           })
         }
        })
        
      }

    render(){
        return(
            <>
          <SignIn updateUser={this.updateUser}/>
          <a href ='/createuser'>Create Account</a>
          </>
        )
    }
}

export default Login;