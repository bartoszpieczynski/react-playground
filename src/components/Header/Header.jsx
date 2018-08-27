import React, { Component } from "react";
import { DepthOfFieldSnowfall } from "react-snowflakes";

class Header extends Component {
   state = {
      display: true
   };
   // Workaround to the issue where snowflakes stretched the screen after changing its width to a smaller one
   componentDidUpdate(prevProps) {
      if (prevProps.width !== this.props.width) {
         this.setState({ display: false }, () => {
            this.setState({ display: true });
         });
      }
   }

   render() {
      let snowflakes = (
         <DepthOfFieldSnowfall
            count={50}
            style={{
               display: this.state.display,
               position: "absolute",
               margin: "0 auto",
               width: "90%",
               height: "90%",
               zIndex: "10",
               color: "#b8c8f3"
            }}
         />
      );
      if (!this.state.display) {
         snowflakes = null;
      }
      // End of the workaround

      return (
         <div className="header">
            {snowflakes}
            <div className="header__header-text">
               <h1 className="header__header-text--main">Hi! I'm Bartek</h1>
               <h2 className="header__header-text--sub">
                  and this is my portfolio
               </h2>
            </div>
            <img className="header__image" src={'./images/mountain-header.jpg'} alt="mountains" />
         </div>
      );
   }
}

export default Header;
