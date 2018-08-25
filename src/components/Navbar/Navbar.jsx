import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
   state = {
      navItems: ["About", "Skills", "Projects", "Contact"]
   };

   render() {
      const navItems = this.state.navItems.map(item => {
         return (
            <li className='navbar__items__item' key={item}>
               <NavLink className="navbar__items__link" to={"/" + item}>
                  {item}
               </NavLink>
            </li>
         );
      });
      return (
         <div className="navbar">
            <NavLink to='/'>
               <svg className="navbar__items__link--svg navbar__items__link--svg--home" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
               </svg>
            </NavLink>
            <ul className="navbar__items">{navItems}
            <svg className="navbar__items__link--svg navbar__items__link--svg--social" viewBox="0 0 24 24">
               <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
            </svg>
            </ul>

         </div>
      );
   }
}
