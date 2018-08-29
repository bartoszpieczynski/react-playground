import React from "react";

const skills = props => {
   return (
      <section id="skills" className="section section-skills">
         <h2 className="section__title">My Skills</h2>
         <div className="section-skills__sun__container">
            <div className="section-skills__sun">
               <div className="section-skills__sun__circle" />
               <div className="section-skills__sun__sunrays">
                  <span />
                  <span />
                  <span />
               </div>
            </div>
         </div>
         <div className="container">
            <div className="section__info">
               <p className="section__paragraph">
                  This year I learned a lot of things like React, basics of Redux and webpack. <br />
                  If you want to know more about my skills click on the button below.<br />
                  I won't evaluate my skills because I believe that I'm not the one to judge but I will try to describe what I have learned
                  and how comfortable I feel with those skills.
               </p>
            </div>
         </div>
         <img
            className="section-skills__image--boat"
            src={"../images/boat.png"}
            alt="boat"
         />
      </section>
   );
};

export default skills;
