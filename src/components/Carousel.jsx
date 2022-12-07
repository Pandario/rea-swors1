import React, {useState} from 'react';
import '../assets/carousel.css';
import {SliderData} from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="container-slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            <button className='join'>Join us</button>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key=
                    {index}
                    >
                    {index === current && (<img src={slide.imgURL} alt="carousel"
                     className='CarouselImg'/>)}
                        
                    </div>
                    
                )
            })}
        </section>
    );
}
  
  export default Carousel;