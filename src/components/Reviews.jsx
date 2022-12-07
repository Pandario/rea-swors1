import React from 'react'
import try1 from '../img/try1.jpeg'
import try2 from '../img/try2.jpg'
import try3 from '../img/try3.jpg'
import '../assets/reviews.css'


function Reviews() {
  return (
    <div className="reviews">

        <div className="circle">
          <img src={try1} alt="" />
          <h3>Jack</h3>
          <p>Some people just need to feel when you've just destroyed rebels vessel</p>
        </div>

        <div className="circle">
          <img src={try2} alt="" />
          <h3>Emperor</h3>
          <p>Serving our Empire, our people gives me strenth to wake up each day!</p>
        </div>

        <div className="circle">
          <img src={try3} alt="" />
          <h3>Larry</h3>
          <p>My friends were calling me "missing Larry"... But in 4 years of training I miss only 99 times of 100!</p>
        </div>

    </div>

  )
}

export default Reviews