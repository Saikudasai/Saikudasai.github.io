import React, { Component } from 'react'
import Content from '../../Components/Content/Content.jsx'
import Slider from '../../Components/Slider/Slider.jsx';
import Footer from '../../Components/Footer/Footer.jsx';

function Home() {
  return (
    <div className="Home">
      <Slider/>
      <Content/>
    </div>  
  );
}

export default Home;