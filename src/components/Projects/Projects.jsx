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
            <div className="section-projects__info">
               <p className="section__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officiis pariatur laborum alias corporis in. Officiis beatae
                  rem hic, rerum earum ipsa dolorum quisquam modi voluptatum
                  architecto facilis sit, nihil culpa?
               </p>
            </div>
         </div>
      </div>
   );
};

export default projects;
