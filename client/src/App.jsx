import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import Create from './pages/CreateUser';
import Home from './pages/Home';
import Booking from './pages/Booking';

// import axios from 'axios';


class App extends Component {


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
          <Switch>
            <Route exact path="/booking" component={Booking} />
          </Switch>

        </Router>



      </>
    );
  }
}


export default App;
