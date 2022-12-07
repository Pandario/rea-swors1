import React from 'react';
import '../assets/App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import {SliderData} from './SliderData';
// import SliderData from './SliderData';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel slides={SliderData}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* {SliderData[1].imgURL} to Carousel */}

    </div>
  );
}

export default App;
