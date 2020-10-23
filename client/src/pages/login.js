import React, { Component } from 'react';
import SignIn from '../components/userSignIn/SignIn';
import axios from 'axios';
import './Login.css'


class Login extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      firstname: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
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

  render() {
    return (
      <div className="loginPage" >
        <img src="https://github.com/Tarmity/poseura/blob/main/client/src/components/Images/Poseur.png?raw=true" alt="poseur"
          style={{
            marginTop: '100px',
            marginBottom: '200px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
          }} />
        {/* <h1 style={{ textAlign: 'center', fontSize: '150px', margin: '80px 0 150px 0', color: '#23C0AD'}}>Poseura</h1> */}
        <SignIn updateUser={this.updateUser} />
      </div>
    )
  }
}

export default Login;