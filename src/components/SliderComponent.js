import React from 'react';
import { FLICKITY } from  '../shared/flickity';
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";


function Slider() {
    const slider = FLICKITY.map((slider) => {
        return(
            // <Flickity className="slider">
            <img src={slider.image} />
        //    </Flickity>  
        );
  });

  return (
    <Flickity className="slider">
            {slider}
    </Flickity>
  );
  }

export default Slider;