import React, { Component } from 'react';
import '../scss/main.scss';
import { withRouter } from "react-router-dom";

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Navbar />
          <Header />
          <section className='container section__about'>

          </section>
        </div>
    );
  }
}

export default withRouter(App);
