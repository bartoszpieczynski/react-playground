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
                  <div className="section-about__info">
                     <div className="photo-container">
                        <img
                           className="section-about__image--me"
                           src={'./images/me.jpg'}
                           alt="me"
                        />
                     </div>
                     <p className="section__paragraph">
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
                        maiores, harum.
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