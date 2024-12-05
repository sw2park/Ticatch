import React, { useState, useRef, useEffect } from 'react';
import './MainSlide2.css'; // 스타일을 별도로 관리하는 경우

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesContainerRef = useRef(null);
  const slideRef = useRef(null);
  const slidesToShow = 4; // 화면에 표시할 슬라이드 개수
  const slides = [
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255167_241203_114423.jpg", link: "http://example.com/page1" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255164_241203_113353.jpg", link: "http://example.com/page2" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255163_241203_113239.png", link: "http://example.com/page3" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255162_241203_112959.png", link: "http://example.com/page4" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255160_241203_112533.gif", link: "http://example.com/page5" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255167_241203_114423.jpg", link: "http://example.com/page1" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255164_241203_113353.jpg", link: "http://example.com/page2" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255163_241203_113239.png", link: "http://example.com/page3" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255162_241203_112959.png", link: "http://example.com/page4" },
    { src: "http://www.kopis.or.kr/upload/pfmPoster/PF_PF255160_241203_112533.gif", link: "http://example.com/page5" }
  ];

  const totalSlides = slides.length;

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;

    // 화면에 표시할 슬라이드 개수를 고려하여 인덱스 범위 조정
    if (newSlide < 0) {
      newSlide = totalSlides - slidesToShow;
    } else if (newSlide > totalSlides - slidesToShow) {
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
    <div className="con3">
      <button className="prev" onClick={() => moveSlide(-1)}>&lt;</button>
      <div className="carousel-slides" ref={slidesContainerRef}>
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            ref={index === 0 ? slideRef : null}
          >
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.src} alt={`Image ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
      <button className="next" onClick={() => moveSlide(1)}>&gt;</button>
    </div>
  );
};

export default Carousel;
