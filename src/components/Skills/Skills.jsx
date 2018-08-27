import React from 'react';

const skills = (props) => {
   return(
      <section id="skills" className="section section-skills">
      <h2 className="section__title"> My Skills</h2>
      <div className="section-skills__sun__container">
         <div className="section-skills__sun">
            <div className="section-skills__sun__circle"/>
               <div className="section-skills__sun__sunrays">
                  <span />
                  <span />
                  <span />
               </div>
         </div>
      </div>
      <img
         className="section-skills__image--boat"
         src={"../images/boat.png"}
         alt="boat"
      />
      <div className='section-'></div>
   </section>
   );
}

export default skills;