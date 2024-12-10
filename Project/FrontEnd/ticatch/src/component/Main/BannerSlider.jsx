import React, { useState, useEffect, useRef } from 'react';
import './BannerSlider.css'; // 스타일 파일 분리 (CSS 따로 작성)

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // 시작 슬라이드를 1로 설정
  const [slidesCount, setSlidesCount] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const slideContainerRef = useRef(null);
  const slideWrapRef = useRef(null);
  let autoSlideInterval = useRef(null);
  const startDrag = useRef(null);
  const dragDistance = useRef(0);

  const slides = [
    { src: "../src/component/images/241209030423_16007528.jpeg", link: "http://example.com/page1" },
    { src: "src/component/images/241205021648_24016695.jpeg", link: "http://example.com/page2" },
    { src: "src/component/images/241205011108_16007528.png", link: "http://example.com/page3" },
    { src: "src/component/images/241016043016_16007528.png", link: "http://example.com/page4" },
    { src: "src/component/images/241128031052_16007528.png", link: "http://example.com/page5" },
    { src: "src/component/images/241125051028_24016737.png", link: "http://example.com/page1" },
    { src: "src/component/images/240816042019_24011935.jpeg", link: "http://example.com/page2" },
    { src: "src/component/images/241008024945_24014511.png", link: "http://example.com/page3" },
    { src: "src/component/images/241107041700_24015649.jpeg", link: "http://example.com/page4" },
    { src: "src/component/images/240904095711_24012498.png", link: "http://example.com/page5" }
  ];

  useEffect(() => {
    const slideWrap = slideWrapRef.current;
    const slides = slideContainerRef.current.children;
    setSlidesCount(slides.length - 2); // 클론된 슬라이드를 제외한 개수로 설정
    setSlideWidth(slideWrap.offsetWidth);

    createPagination();

    const handleResize = () => setSlideWidth(slideWrap.offsetWidth);
    window.addEventListener('resize', handleResize);

    startAutoSlide();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoSlideInterval.current);
    };
  }, []);

  useEffect(() => {
    if (slidesCount > 0) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [slidesCount]);

  useEffect(() => {
    const pagination = document.querySelectorAll('.pagination li');
    pagination.forEach((li, i) => {
      li.classList.toggle('act', i === (currentSlide - 1 + slidesCount) % slidesCount);
    });
    if (currentSlide === 0) {
      setTimeout(() => {
        slideContainerRef.current.style.transition = 'none';
        setCurrentSlide(slidesCount);
        slideContainerRef.current.style.transform = `translateX(-${slideWidth * slidesCount}px)`;
      }, 500);
    } else if (currentSlide === slidesCount + 1) {
      setTimeout(() => {
        slideContainerRef.current.style.transition = 'none';
        setCurrentSlide(1);
        slideContainerRef.current.style.transform = `translateX(-${slideWidth}px)`;
      }, 500);
    }
  }, [currentSlide, slideWidth, slidesCount]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    slideContainerRef.current.style.transition = 'transform 0.5s ease';
    slideContainerRef.current.style.transform = `translateX(-${slideWidth * index}px)`;
  };

  const createPagination = () => {
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination';

    for (let i = 0; i < slidesCount; i++) {
      const li = document.createElement('li');
      li.className = i === 0 ? 'act' : '';
      li.innerHTML = '<a href="#">•</a>';
      li.addEventListener('click', (event) => {
        event.preventDefault();
        goToSlide(i + 1);
      });
      paginationContainer.appendChild(li);
    }

    if (slideWrapRef.current) {
      slideWrapRef.current.appendChild(paginationContainer);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 1) {
      goToSlide(0);
    } else {
      const index = currentSlide - 1;
      goToSlide(index);
    }
  };

  const handleNext = () => {
    if (currentSlide === slidesCount) {
      goToSlide(slidesCount + 1);
    } else {
      const index = currentSlide + 1;
      goToSlide(index);
    }
  };

  const handleDragStart = (start) => {
    setIsDragging(true);
    startDrag.current = start;
  };

  const handleDragMove = (current) => {
    if (isDragging) {
      const dragAmount = current - startDrag.current;
      dragDistance.current = dragAmount;
      slideContainerRef.current.style.transition = 'none';
      slideContainerRef.current.style.transform = `translateX(-${slideWidth * currentSlide - dragAmount}px)`;
    }
  };

  const handleDragEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      if (Math.abs(dragDistance.current) > slideWidth / 4) {
        if (dragDistance.current > 0) {
          handlePrev();
        } else {
          handleNext();
        }
      } else {
        goToSlide(currentSlide);
      }
      dragDistance.current = 0;
    }
  };

  const startAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
    autoSlideInterval.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

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
        onMouseDown={(e) => handleDragStart(e.pageX)}
        onMouseMove={(e) => handleDragMove(e.pageX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].pageX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].pageX)}
        onTouchEnd={handleDragEnd}
      >
        <div className="Bannerslide">
          <a href={slides[6].link} target="_blank" rel="noopener noreferrer">
            <img src={slides[6].src} alt="Slide 7" className="banner-image" />
          </a>
        </div> {/* 마지막 슬라이드의 클론 */}
        {slides.map((slide, index) => (
          <div className="Bannerslide" key={index}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.src} alt={`Slide ${index + 1}`} className="banner-image" />
            </a>
          </div>
        ))}
        <div className="Bannerslide">
          <a href={slides[0].link} target="_blank" rel="noopener noreferrer">
            <img src={slides[0].src} alt="Slide 1" className="banner-image" />
          </a>
        </div> {/* 첫 슬라이드의 클론 */}
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
