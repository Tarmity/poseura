import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import Create from './pages/CreateUser';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking';
import PhotoProfile from './pages/PhotoProfile';
import Blog from './pages/blog';

// import axios from 'axios';


class App extends Component {


  render() {
    return (
      <>


        <Router>

          
          <Switch>

            <Route exact path="/" component={Login} />

            <Route exact path="/createuser" component={Create} />

            <Route exact path="/home" component={Home} />

            <Route exact path="/booking" component={Booking} />

            <Route exact path="/photoprofile" component={PhotoProfile} />
            
            <Route exact path="/blog" component={Blog} />


          </Switch>
       
        </Router>



      </>
    );
  }
}



export default App;
