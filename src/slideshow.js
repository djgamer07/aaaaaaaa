// src/Slideshow.js
import React, { useState } from "react";

function Slideshow() {
  const slides = [
    "/source_imgs/slide1.webp",
    "/source_imgs/slide2.jpg",
    "/source_imgs/slide3.jpg",
    "/source_imgs/slide4.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (n) => {
    setCurrentSlide((prev) => (prev + n + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="slideshow-container">
        <img className="slides" src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
        <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </>
  );
}

export default Slideshow;
