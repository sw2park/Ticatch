import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate(); // 이걸로 페이지 이동함
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // 스프링 가서 데이터 전체조회된거 가지고 오기
  useEffect(() => {
    axios
      .get("/api/order")
      .then((response) => {
        console.log("API Response:", response.data);
        setConcerts(response.data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredConcerts = concerts.filter(
    (concert) =>
      concert.ptitle &&
      concert.ptitle.toLowerCase().includes(search.toLowerCase())
  );

  const ITEMS_PER_SLIDE = 3; // 슬라이드 인덱스 한개에 3개의 공연 정보 보여줌 (나중에 4개로 바꾸기 지금은 작동 여부 땜에 3개 해놓음)

  const handleNext = () => {
    if (currentIndex + ITEMS_PER_SLIDE < filteredConcerts.length) {
      setCurrentIndex(currentIndex + ITEMS_PER_SLIDE);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - ITEMS_PER_SLIDE);
    }
  };

  // 검색 로직 (프론트에서 실행됨)
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentIndex(0); // 지금 슬라이드 첫번째 페이지에서만 검색이되서 검색하면 그냥 다시 처음 슬라이드 페이지로 오게끔 만듬
  };

  return (
    <div className="booking-page">
      {/* Header */}
      <header className="booking-header">
        <div className="logo">
          {/* <img src="logo.png" alt="Logo" /> */}
          <h2
            style={{ cursor: "pointer" }} // Use a JavaScript object
            onClick={() => {
              navigate("/mainPage");
            }}
          >
            다나오조
          </h2>
        </div>
        <input
          type="text"
          placeholder="공연 제목으로 찾아보세요."
          className="search-bar"
          value={search}
          onChange={handleSearchChange} // Attach the handler here
        />
        <div className="user-links">
          {/* 전부 Link 로 변경 */}
          <a href="/login">로그인</a>
          <a href="/signup">회원가입</a>
          <a href="/mypage">마이페이지</a>
        </div>
      </header>
      <nav className="navigation-menu">
        {/* a 태그 말고 그냥 서버가서 뮤지컬인거만 조회해서 보여주기?(아니면 그냥 위에 있는 검색마냥 이름같은거 바로 조회?) */}
        <a href="/musical">뮤지컬</a>
        <a href="/classic">대중음악</a>
        <a href="/concert">복합</a>
        <a href="/exhibition">전시/행사</a>
        <a href="/theater">서양음악(클랙식)</a>
      </nav>

      {/* 공연 리스트 */}
      <main className="concert-container">
        <button
          className="nav-button left-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div className="concert-slider">
          {filteredConcerts
            .slice(currentIndex, currentIndex + ITEMS_PER_SLIDE)
            .map((concert) => (
              <div className="concert-card" key={concert.seqPfjoinId}>
                <h3 className="concert-title">
                  {concert.ptitle || "No Title"}
                </h3>
                <img
                  src={concert.pposter || "https://via.placeholder.com/300x400"}
                  alt={concert.ptitle || "Concert Poster"}
                  className="concert-image"
                />
                <p className="concert-genre">장르: {concert.pgenre || "N/A"}</p>
                <p className="concert-location">
                  장소: {concert.fdAddr || "Unknown"}
                </p>
                <p className="concert-price">
                  가격: {concert.pdSeatprice || "N/A"}
                </p>
                <button className="booking-button">
                  상세페이지로 이동할거임?
                </button>
              </div>
            ))}
        </div>
        <button
          className="nav-button right-button"
          onClick={handleNext}
          disabled={currentIndex + ITEMS_PER_SLIDE >= filteredConcerts.length}
        >
          &gt;
        </button>
      </main>

      {/* Footer */}
      <footer className="booking-footer">
        <p>&copy; {new Date().getFullYear()} 다나오조. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
