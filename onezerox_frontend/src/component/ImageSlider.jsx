// src/component/ImageSlider.jsx

import React, { useEffect, useState } from 'react';
import './Imageslider.css'; // Optional: for styling



function ImageSlider({ images, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slider-image"
      />
    </div>
  );
}

export default ImageSlider;
