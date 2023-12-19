import React from 'react'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

import "./Slider.scss"
import { useState } from 'react';

const Slider = () => {
    
    const [currentSlide, setcurrentSlide] = useState(0);

    const data = [
        "https://www.splitshire.com/wp-content/uploads/2021/04/SplitShire-21-9550.jpg",
        "https://www.splitshire.com/wp-content/uploads/2016/04/SplitShire-250138.jpg",
        "https://www.splitshire.com/wp-content/uploads/2016/04/SplitShire-5008.jpg",
    ];

    const prevSlide = () =>{
        setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1)
    }
    const nextSlide = () =>{
        setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
    }

    return (
        <div className='slider'>
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon className='arrow'/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon className='arrow'/>
                </div>
            </div>
        </div>
  );
};

export default Slider