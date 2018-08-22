import React, { Component } from 'react';
import '../scss/main.scss';
import { Route, Switch, withRouter } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
        </div>
    );
  }
}

export default withRouter(App);
