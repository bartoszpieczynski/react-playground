import React from "react";
import background from "../../images/mountain-header.jpg";
import { DepthOfFieldSnowfall } from "react-snowflakes";

const header = props => {
   return (
      <div className="header">
         <DepthOfFieldSnowfall
            count={50}
            style={{
               position: "relative",
               margin: "0 auto",
               width: "90%",
               height: "90%",
               zIndex: "10",
               color: "#b8c8f3"
            }}
         />
         <div className="header__header-text">
            <h1 className="header__header-text--main">Hi! I'm Bartek</h1>
            <h2 className="header__header-text--sub">
               and this is my portfolio
            </h2>
         </div>
         <img className="header__image" src={background} alt="mountains" />
      </div>
   );
};

export default header;
