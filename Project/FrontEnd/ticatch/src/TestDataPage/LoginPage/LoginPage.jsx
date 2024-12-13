import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const loginData = {
        userId: userId,
        password: password,
      };

      console.log("userId: " + userId);
      console.log("pw: " + password);

      const response = await axios.post("/api/order/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("로그인 성공: ", response.data);

      // Navigate to the main page with response data
      navigate("/mainPage", { state: response.data });
    } catch (error) {
      console.error("로그인 실패: ", error);
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="login-page">
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/mainPage");
        }}
      >
        <span style={{ color: "black" }}>다</span>
        <span style={{ color: "red" }}>나오조</span>
      </h2>
      <div className="login-container">
        <div className="login-form">
          <label htmlFor="userId">아이디</label>
          <input
            type="text"
            id="userId"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />

          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-button"
            onClick={() => {
              handleLogin();
            }}
          >
            로그인하기
          </button>
          <button
            className="login-button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            회원가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
