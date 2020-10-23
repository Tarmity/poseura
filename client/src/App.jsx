import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import Create from './pages/CreateUser';
import Home from './pages/Home';
import Booking from './pages/Booking';
import NavBar from './components/Navbar/NavBar'

// import axios from 'axios';


class App extends Component {


  render() {
    return (
      <>


        <Router>

          <NavBar />
          <Switch>

            <Route exact path="/" component={Login} />

            <Route exact path="/createuser" component={Create} />


            <Route exact path="/home" component={Home} />

            <Route exact path="/booking" component={Booking} />


          </Switch>
        </Router>



      </>
    );
  }
}



export default App;
