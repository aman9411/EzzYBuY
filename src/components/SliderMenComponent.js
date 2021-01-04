import React from 'react';
import { FLICKITY } from  '../shared/flickity';
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";


function SliderMen() {
    const slider = FLICKITY.map((slider) => {
        return(
            <img src={slider.image} />
        );
  });

  return (
    <Flickity className="slider">
            {slider}
    </Flickity>
  );
  }

export default SliderMen;