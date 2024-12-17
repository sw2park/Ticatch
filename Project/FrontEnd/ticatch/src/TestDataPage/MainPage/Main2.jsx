import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import style from "./Main2.module.css";

function Main2() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  // 세션에 저장되어있는 값들 가지고 오거나 없으면 없는거 처리 하는거 (처음 페이지 로드되때 한번만 실행된)
  useEffect(() => {
    const userToken = sessionStorage.getItem("userToken");
    const storedUserId = sessionStorage.getItem("userId");

    if (userToken && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
    } else {
      setIsLoggedIn(false);
      setUserId("");
    }
  }, []);

  // 테스트 로그아웃 버튼
  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userId");
    setIsLoggedIn(false);
    setUserId("");
    alert("로그아웃되었습니다.");
  };

  return (
    <div className={style.main}>
      <header>
        <div>
          <h1
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/main2");
            }}
          >
            <span style={{ color: "black" }}>다</span>
            <span style={{ color: "red" }}>나오조</span>
          </h1>
          <nav>
            <ul>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                  {/* 로그아웃 테스트용 */}
                  <button
                    onClick={handleLogout}
                    style={{ marginLeft: "10px", backgroundColor: "gray" }}
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">로그인</Link>
                  </li>
                  <li>
                    <Link to="/signup">회원가입</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h1 className={style.hello}>Hello</h1>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Main2;
