import React, { useState, useEffect, useRef } from 'react';
import './BannerSlider.css'; // 스타일 파일 분리 (CSS 따로 작성)

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideContainerRef = useRef(null);
  const slideWrapRef = useRef(null);
  let autoSlideInterval = useRef(null);

  useEffect(() => {
    const slideWrap = slideWrapRef.current;
    const slides = slideContainerRef.current.children;
    setSlidesCount(slides.length);
    setSlideWidth(slideWrap.offsetWidth);

    // 초기 페이지네이션 생성
    createPagination();

    // 윈도우 리사이즈 이벤트
    const handleResize = () => setSlideWidth(slideWrap.offsetWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoSlideInterval.current);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    slideContainerRef.current.style.transition = 'transform 0.5s ease';
    slideContainerRef.current.style.transform = `translateX(-${slideWidth * index}px)`;

    // 페이지네이션 업데이트
    const pagination = document.querySelectorAll('.pagination li');
    pagination.forEach((li, i) => {
      li.classList.toggle('act', i === index);
    });
  };

  const createPagination = () => {
    const pagination = document.createElement('div');
    pagination.className = 'pagination';

    for (let i = 0; i < slidesCount; i++) {
      const li = document.createElement('li');
      li.className = i === 0 ? 'act' : '';
      li.innerHTML = '<a href="#">•</a>';
      li.addEventListener('click', (event) => {
        event.preventDefault();
        goToSlide(i);
      });
      pagination.appendChild(li);
    }

    slideWrapRef.current.appendChild(pagination);
  };

  const handlePrev = () => {
    const index = (currentSlide - 1 + slidesCount) % slidesCount;
    goToSlide(index);
  };

  const handleNext = () => {
    const index = (currentSlide + 1) % slidesCount;
    goToSlide(index);
  };

  const handleDrag = (start, end) => {
    if (start < end) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentSlide]);

  return (
    <div
      className="slidewrap"
      ref={slideWrapRef}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className="Bannerslides"
        ref={slideContainerRef}
        onMouseDown={(e) => (startDrag.current = e.pageX)}
        onMouseUp={(e) => handleDrag(startDrag.current, e.pageX)}
        onTouchStart={(e) => (startDrag.current = e.touches[0].pageX)}
        onTouchEnd={(e) => handleDrag(startDrag.current, e.changedTouches[0].pageX)}
      >
        {/* 슬라이드 내용 */}
        <div className="Bannerslide">Slide 1</div>
        <div className="Bannerslide">Slide 2</div>
        <div className="Bannerslide">Slide 3</div>
        <div className="Bannerslide">Slide 4</div>
        <div className="Bannerslide">Slide 5</div>
        <div className="Bannerslide">Slide 6</div>
        <div className="Bannerslide">Slide 7</div>
      </div>

      <button className="leftbtn btn" onClick={handlePrev}>
        &lt;
      </button>
      <button className="rightbtn btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
