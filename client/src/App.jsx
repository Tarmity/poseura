import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import Create from './pages/CreateUser';
import Home from './pages/Home';
// import axios from 'axios';


class App extends Component {
  //  constructor() {
  //    super()
  //    this.state = {
  //      loggedIn: false,
  //      firstname: null
  //    }

  //    this.getUser = this.getUser.bind(this)
  //    this.componentDidMount = this.componentDidMount.bind(this)
  //    this.updateUser  =this.updateUser.bind(this)
  //  }

  //  componentDidMount(){
  //    this.getUser()
  //  }

  //  updateUser (userObject) {
  //    this.setState(userObject)
  //  }

  //  getUser(){
  //    axios.get('/api/login').then(response => {
  //     console.log('Get user resopnse: ')
  //     console.log(response.data)
  //     if (response.data.user) {
  //       console.log('Get user: there is a user saved in the server session: ')

  //       this.setState({
  //         loggedIn: true,
  //         firstName: response.data.user.firstName
  //       })
  //     } else {
  //       console.log('Get user: no user');
  //       this.setState({
  //         loggedIn: false,
  //         firstname: null
  //       })
  //     }
  //    })
     
  //  }


  render() {
    return (
      <>
        <Router>

          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
          <Switch>
            <Route exact path="/createuser" component={Create} />
          </Switch>
          <Switch>
            <Route exact path="/home" component={Home} />
          </Switch>

        </Router>



      </>
    );
  }
}


export default App;
