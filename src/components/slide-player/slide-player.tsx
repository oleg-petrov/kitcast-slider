import React, { useState, useEffect } from 'react';

import './slider-player.scss';

export default function SlidePlayer({ dataSlider }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const initialDelay = dataSlider[0].duration;
  const [delay, setDelay] = useState(initialDelay); 

  const setNewDelay = (index) => {
    const newDelay = dataSlider.find(item => item.id === index).duration;
    setDelay(newDelay);
  };

  const nextSlide = () => {
      if(slideIndex !== dataSlider.length){
          setSlideIndex(slideIndex + 1);
          setNewDelay(slideIndex + 1);
      } 
      else if (slideIndex === dataSlider.length){
          setSlideIndex(1);
          setNewDelay(1);
      }
  };

  useEffect(() => {
    const interval = setInterval(()=>{
        nextSlide();        
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div className="slider-container">
      <div className="slider">
        {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className={slideIndex === index + 1 ? "slide active" : "slide"}
              >
                {obj.type === 'image' ? (
                  <img src={obj.src} />
                ) : (
                  <video width="100%" height="100%" src={obj.src} loop={true} autoPlay={true} muted/>
                )}
              </div>
            )
        })}
      </div>
    </div>
  )

}