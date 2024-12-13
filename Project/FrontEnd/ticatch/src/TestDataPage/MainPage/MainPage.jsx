import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  const navigate = useNavigate();
  const [rank, setRank] = useState([]);
  const [concerts, setConcerts] = useState([]);
  const [search, setSearch] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);

  // 자동 슬라이더 이미지들
  const sliderImages = [
    "https://www.clevelandamphitheater.com/wp-content/uploads/2024/07/Cleveland-Orchestra-Return-of-the-King-banner-2-1400-x-500-px.jpg-1.webp",
    "https://www.kivaauditorium.com/wp-content/uploads/sites/60/2024/05/Experience-Hendrix-banner-1400-x-500-px.jpg-1.webp",
    "https://www.pineknobamp.com/wp-content/uploads/2024/10/Weird-Al-Yankovic-banner-1400-x-500-px-2.jpg-4.webp",
    "https://www.paramounttheatreseattle.net/wp-content/uploads/2024/10/Foster-The-People-banner-2-1400-x-500-px.jpg-1.webp",
    "https://www.marymooramphitheatre.com/wp-content/uploads/2024/05/The-Wailers-Banner-updated-1400-x-500-px.jpg-1.webp",
    "https://www.marymooramphitheatre.com/wp-content/uploads/2024/06/Switchfoot-Blue-October-Matt-Nathanson-banner-1400-x-500-px.jpg-1.webp",
    "https://www.deervalleyamphitheater.com/wp-content/uploads/2024/05/The-Rascals-The-Utah-Symphony-banner-1400-x-500-px.jpg-1.webp",
    "https://www.albuquerqueamphitheater.com/wp-content/uploads/2024/05/The-Marley-Brothers-banner-3-1400-x-500-px.jpg-1.webp",
  ];

  // 자동 슬라이더 작동하는거
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  useEffect(() => {
    axios
      .get("/api/order/rank")
      .then((response) => {
        console.log("rank: ", response.data); // Check if the data you need is in response.data
        setRank(response.data || []); // Assign response.data directly to rank
      })
      .catch((error) => console.error("Rank Error: ", error));
  }, []);

  // 백엔드에서 모든 데이터 가져오기
  useEffect(() => {
    axios
      .get("/api/order")
      .then((response) => {
        console.log("API Response:", response.data);
        setConcerts(response.data || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // 선택한 장르로 필터링
  const filteredConcerts = concerts.filter((concert) => {
    const matchesGenre =
      genreFilter === "All" || concert.pgenre === genreFilter;
    const matchesSearch =
      concert.ptitle &&
      concert.ptitle.toLowerCase().includes(search.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const ITEMS_PER_SLIDE = 4; // 한 슬라이드에 4개 아이템 보여줌 (모든 탭에서 4개씩만 보여줌)

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentIndex(0);
  };

  const handleGenreFilter = (value) => {
    setGenreFilter(value);
    setCurrentIndex(0);
  };

  return (
    <div className="booking-page">
      {/* 헤더 */}
      <header className="booking-header">
        <div className="logo">
          <h2
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSearch("");
              setGenreFilter("All");
              setCurrentIndex(0);
            }}
          >
            <span style={{ color: "black" }}>다</span>
            <span style={{ color: "red" }}>나오조</span>
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

      {/* 장르 필터 */}
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

      {/* 메인 콘텐츠 */}
      {/* nav 이용하면 위쪽 패딩 없샘 */}
      <main
        className={`main-content ${genreFilter !== "All" ? "no-slider" : ""}`}
      >
        {/* 슬라이더: 전체일 때만 표시 */}
        {genreFilter === "All" && (
          <div className="auto-slider">
            <img
              src={sliderImages[sliderIndex]}
              alt={`Slide ${sliderIndex + 1}`}
              className="slider-image"
            />
          </div>
        )}

        {/* 랭킹 좌석 판매순임 동일한 값이 있으면 db desc 로 리스트 가지고와서 5개 보여줌 */}
        {genreFilter === "All" && (
          <div>
            <h2>랭킹</h2>
            <div className="concert-slider">
              {rank.slice(0, ITEMS_PER_SLIDE).map((item, index) => (
                <div className="concert-card" key={item.seqPfjoinId}>
                  <h3 className="concert-title">{item.ptitle || "No Title"}</h3>
                  <div className="image-container">
                    <Link to={`/detail/${item.seqPfjoinId}/view`}>
                      <img
                        src={
                          item.pposter || "https://via.placeholder.com/500x500"
                        }
                        alt={item.ptitle || "Concert Poster"}
                        className="concert-image"
                      />
                    </Link>
                    <span className="rank">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 공연 목록 */}
        {genreFilter === "All" && <h2>전체 목록</h2>}
        <div className="concert-container">
          <div className="concert-slider">
            {filteredConcerts
              .slice(currentIndex, currentIndex + ITEMS_PER_SLIDE)
              .map((concert) => (
                <div className="concert-card" key={concert.seqPfjoinId}>
                  <h3 className="concert-title">
                    {concert.ptitle || "No Title"}
                  </h3>
                  <Link to={`/detail/${concert.seqPfjoinId}/view`}>
                    <img
                      src={
                        concert.pposter || "https://via.placeholder.com/500x500"
                      }
                      alt={concert.ptitle || "Concert Poster"}
                      className="concert-image"
                    />
                  </Link>
                  <p className="concert-genre">
                    장르: {concert.pgenre || "N/A"}
                  </p>
                  <p className="concert-price">
                    가격: {concert.pdSeatprice || "N/A"}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="booking-footer">
        <p>&copy; {new Date().getFullYear()} 다나오조. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
