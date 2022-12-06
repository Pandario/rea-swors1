import React from 'react';
import '../assets/App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
// import SliderData from './SliderData';
// import rightArrow from './icons/right-arrow.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* {SliderData[1].imgURL} to Carousel */}
    <div>
      {/* <button><img src={'./icons/right-arrow.svg'}/></button> */}
    </div>
    </div>
  );
}

export default App;
