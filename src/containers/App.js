import React, { Component } from "react";
import "../scss/main.scss";
import { withRouter } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

import spring from "../images/spring.png";
import frog from '../images/frog.png';
import me from "../images/me.jpg";

class App extends Component {
   state = {
      navColor: null,
      windowWidth: '90%'
   };

   componentDidMount() {
      this.setState({initialWidth: window.windowWidth});
      window.addEventListener("scroll", this.colorChange);
      window.addEventListener('resize', this.windowResize);
   }

   componentWillUnmount() {
     window.removeEventListener('scroll', this.colorChange);
     window.addEventListener('resize', this.windowResize);
   }

   colorChange = () => {
      let position = window.scrollY;
      if (position <= document.getElementById('about').offsetTop  - 100) {
         this.setState({ navColor: "#6e8fe8" });
      }
      if (position > document.getElementById('about').offsetTop  - 100 && position <= document.getElementById('skills').offsetTop - 100) {
         this.setState({ navColor: "#8BC34A" });
      }
      if (position > document.getElementById('skills').offsetTop  - 100) {
        this.setState({navColor: '#FF9800'})
      }
   };

   windowResize = () => {
      if(window.innerWidth !== this.state.windowWidth) {
        this.setState({windowWidth: window.innerWidth});
      }
   }

   render() {
      return (
         <div className="App">
            <Navbar color={this.state.navColor} />
            <Header width={this.state.windowWidth} />
            <section id="about" className="section section__about">
               <h2 className="section__title">About Me</h2>
               <img
                  className="section__about__image--bird"
                  src={spring}
                  alt="bird"
               />
               <div className="container">
                  <div className='section__about__info'>
                     <div className="photo-container">
                        <img
                           className="section__about__image--me"
                           src={me}
                           alt="me"
                        />
                     </div>
                     <p className='section__about__info__text'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Officiis impedit libero esse odio excepturi fuga
                        est ut itaque a quod suscipit, rerum asperiores.
                        Consequuntur voluptates illo rerum recusandae pariatur
                        asperiores, aspernatur, saepe ipsum error dolorem, quod
                        inventore possimus modi deleniti tenetur et officiis.
                        Nemo ab in totam ratione sequi error, ea dolorum
                        repudiandae omnis, eaque facere impedit fugiat. Dolorum
                        distinctio autem sequi enim quidem esse accusamus
                        repudiandae voluptatum nobis, velit, molestiae. Eaque
                        maiores, harum. Saepe esse repellendus sint. Labore
                        provident optio quis commodi quod quaerat quo similique
                        perspiciatis libero facere. Suscipit odit quas nemo,
                        enim laudantium, provident repellendus natus nostrum
                        facilis expedita adipisci qui, harum minus quidem
                        officia cupiditate repellat ut praesentium. Possimus
                        corporis, error atque ex adipisci, illum suscipit
                        pariatur saepe impedit aliquam amet eos reiciendis
                        quidem hic, nisi. Sint nobis modi, nesciunt quasi
                        placeat quia.
                     </p>
                  </div>
               </div>
               <img
                  className="section__about__image--frog"
                  src={frog}
                  alt="snail"
               />
            </section>
            <section id="skills" className="section section__skills">
              <h2 className='section__title'> My Skills</h2>
            </section>
         </div>
      );
   }
}

export default withRouter(App);
