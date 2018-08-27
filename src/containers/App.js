import React, { Component } from "react";
import "../scss/main.scss";
import { withRouter } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

class App extends Component {
   state = {
      navColor: null,
      windowWidth: "90%"
   };

   componentDidMount() {
      this.setState({ initialWidth: window.windowWidth });
      window.addEventListener("scroll", this.colorChange);
      window.addEventListener("resize", this.windowResize);
   }

   componentWillUnmount() {
      window.removeEventListener("scroll", this.colorChange);
      window.addEventListener("resize", this.windowResize);
   }

   colorChange = () => {
      let position = window.scrollY;
      if (position <= document.getElementById("about").offsetTop - 100) {
         this.setState({ navColor: "#6e8fe8" });
      }
      if (
         position > document.getElementById("about").offsetTop - 100 &&
         position <= document.getElementById("skills").offsetTop - 100
      ) {
         this.setState({ navColor: "#8BC34A" });
      }
      if (
         position > document.getElementById("skills").offsetTop - 100 &&
         position <= document.getElementById("projects").offsetTop - 100
      ) {
         this.setState({ navColor: "#fc913a" });
      }
      if (position > document.getElementById("projects").offsetTop - 100) {
         this.setState({ navColor: "#bd4c24" });
      }
   };

   windowResize = () => {
      if (window.innerWidth !== this.state.windowWidth) {
         this.setState({ windowWidth: window.innerWidth });
      }
   };

   render() {
      return (
         <div className="App">
            <Navbar color={this.state.navColor} />
            <Header width={this.state.windowWidth} />
            <About />
            <Skills />
            <Projects />
         </div>
      );
   }
}

export default withRouter(App);
