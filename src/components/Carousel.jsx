import React from 'react';
import '../assets/carousel.css';
import SliderData from './SliderData';

function Carousel() {
    return (
        <div className="container-slider">

            {SliderData[0].imgURL}
            {/* {SliderData.map((obj, index) => {
                return (

                )
            })} */}
        </div>
    );
}
  
  export default Carousel;