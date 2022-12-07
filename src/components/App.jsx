import React from 'react';
import '../assets/App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import {SliderData} from './SliderData';
import Reviews from './Reviews';
import Benefits from './Benefits';
// import SliderData from './SliderData';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel slides={SliderData}/>
      <Reviews />
      <Benefits />
    </div>
  );
}

export default App;
