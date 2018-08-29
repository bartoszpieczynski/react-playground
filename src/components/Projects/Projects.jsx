import React from "react";


const projects = props => {
   return (
      <div id="projects" className="section section-projects">
         <h1 className="section__title">My Projects</h1>
         <img
            className="section-projects__image--birch"
            src={"./images/birch.png"}
            alt="birch"
         />
         <img
            className="section-projects__image--tree"
            src={"./images/tree-autumn.png"}
            alt="autumn tree"
         />
         <div className="container">
            <div className="section__info">
               <p className="section__paragraph">
                  While working for my last employer I have made around 10 websites but on this portfolio you will find only a few of my private projects.
                  If you want to take a look at them, click on the button below and if you want to know more about projects that I have made for my employer, please contact me.
               </p>
            </div>
         </div>
      </div>
   );
};

export default projects;
