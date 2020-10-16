import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from './pages/Login';
import Create from './pages/CreateUser';
import Home from './pages/Home';

function App() {
  return (
    <div >
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



    </div>
  );
}


export default App;
