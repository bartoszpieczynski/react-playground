import React from 'react';

const about = (props) => {
   return (
      <section id="about" className="section section-about">
               <h2 className="section__title">About Me</h2>
               <img
                  className="section-about__image--bird"
                  src={'./images/spring.png'}
                  alt="bird"
               />
               <div className="container">
                  <div className="section__info">
                     <p className="section__paragraph">
                        Hi! My name is Bartek and I'm a novice Frontend Developer. <br/>
                        I have a year of work experience in web developing.<br/>
                        I worked in company which was creating sites for small businesses.<br/>
                        I was responsible for both backend (PHP) and frontend (HTML, CSS, JQuery).
                        While working for that company, I started to be intrested in JavaScript.
                        Currently I'm learning React.js and I'm really into it.
                        In the future I would like to learn node.js and become Fullstack Developer.
                     </p>
                  </div>
               </div>
               <img
                  className="section-about__image--frog"
                  src={'/images/frog.png'}
                  alt="frog"
               />
            </section>
   );
}

export default about;