import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch data from the API
  useEffect(() => {
    axios
      .get("/api/order")
      .then((response) => {
        console.log("API Response:", response.data);
        setConcerts(response.data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Apply filters for both genre and title
  const filteredConcerts = concerts.filter((concert) => {
    const matchesGenre =
      genreFilter === "All" || concert.pgenre === genreFilter;
    const matchesSearch =
      concert.ptitle &&
      concert.ptitle.toLowerCase().includes(search.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const ITEMS_PER_SLIDE = 3;

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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentIndex(0); // Reset to the first slide
  };

  const handleGenreFilter = (value) => {
    setGenreFilter(value);
    setCurrentIndex(0); // Reset to the first slide
  };

  return (
    <div className="booking-page">
      {/* Header */}
      <header className="booking-header">
        <div className="logo">
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSearch(""); // Reset search
              setGenreFilter("All"); // Reset genre filter
              setCurrentIndex(0); // Reset to the first slide
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
          onChange={handleSearchChange}
        />
        <div className="user-links">
          <a href="/login">로그인</a>
          <a href="/signup">회원가입</a>
          <a href="/mypage">마이페이지</a>
        </div>
      </header>

      {/* Navigation Menu for Genre Filter */}
      <nav className="navigation-menu">
        <span
          className={genreFilter === "All" ? "active" : ""}
          onClick={() => handleGenreFilter("All")}
        >
          전체
        </span>
        <span
          className={genreFilter === "뮤지컬" ? "active" : ""}
          onClick={() => handleGenreFilter("뮤지컬")}
        >
          뮤지컬
        </span>
        <span
          className={genreFilter === "대중음악" ? "active" : ""}
          onClick={() => handleGenreFilter("대중음악")}
        >
          대중음악
        </span>
        <span
          className={genreFilter === "복합" ? "active" : ""}
          onClick={() => handleGenreFilter("복합")}
        >
          복합
        </span>
        <span
          className={genreFilter === "전시/행사" ? "active" : ""}
          onClick={() => handleGenreFilter("전시/행사")}
        >
          전시/행사
        </span>
        <span
          className={genreFilter === "서양음악(클래식)" ? "active" : ""}
          onClick={() => handleGenreFilter("서양음악(클래식)")}
        >
          서양음악(클래식)
        </span>
      </nav>

      {/* Concert List */}
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
                {/* 이미지 눌르면 상세페이지로 seqid 값 전달 */}
                <Link to={`/detail/${concert.seqPfjoinId}/view`}>
                  <img
                    src={
                      concert.pposter || "https://via.placeholder.com/300x400"
                    }
                    alt={concert.ptitle || "Concert Poster"}
                    className="concert-image"
                  />
                </Link>
                <p className="concert-genre">장르: {concert.pgenre || "N/A"}</p>
                <p className="concert-price">
                  가격: {concert.pdSeatprice || "N/A"}
                </p>
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
