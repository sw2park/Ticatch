import React, { useState, useRef, useEffect } from 'react';
import './MainSlide.css'; // 스타일을 별도로 관리하는 경우

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContainerRef = useRef(null);
  const slideRef = useRef(null);
  const slidesToShow = 4; // 화면에 표시할 슬라이드 개수
  const slides = [
    "https://picsum.photos/id/325/400/300",
    "https://picsum.photos/id/159/400/300",
    "https://picsum.photos/id/230/400/300",
    "https://picsum.photos/id/266/400/300",
    "https://picsum.photos/id/225/400/300",
    "https://picsum.photos/id/230/400/300",
    "https://picsum.photos/id/240/400/300",
    "https://picsum.photos/id/270/400/300",
    "https://picsum.photos/id/280/400/300",
    "https://picsum.photos/id/260/400/300"
  ];

  const totalSlides = slides.length;

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;

    // 화면에 표시할 슬라이드 개수를 고려하여 인덱스 범위 조정
    if (newSlide < 0) {
      newSlide = totalSlides - 1;
    } else if (newSlide >= totalSlides) {
      newSlide = 0;
    }

    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const slidesContainer = slidesContainerRef.current;
    const singleSlide = slideRef.current;

    if (slidesContainer && singleSlide) {
      const slideWidth = singleSlide.offsetWidth;
      slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <div className="con">
      <button className="prev" onClick={() => moveSlide(-1)}>&lt;</button>
      <div className="carousel-slides" ref={slidesContainerRef}>
        {slides.map((src, index) => (
          <div
            className="slide"
            key={index}
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            ref={index === 0 ? slideRef : null}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="next" onClick={() => moveSlide(1)}>&gt;</button>
    </div>
  );
};

export default Carousel;
