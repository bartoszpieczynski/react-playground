import React from 'react';


const about = (props) => {
   return (
      <section id="about" className="section section__about">
               <h2 className="section__title">About Me</h2>
               <img
                  className="section__about__image--bird"
                  src={'./images/spring.png'}
                  alt="bird"
               />
               <div className="container">
                  <div className="section__about__info">
                     <div className="photo-container">
                        <img
                           className="section__about__image--me"
                           src={'./images/me.jpg'}
                           alt="me"
                        />
                     </div>
                     <p className="section__about__info__text">
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
                  src={'/images/frog.png'}
                  alt="frog"
               />
            </section>
   );
}

export default about;