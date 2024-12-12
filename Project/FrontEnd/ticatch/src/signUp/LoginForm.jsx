import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!loginId || !password) {
      setErrorMessage("아이디와 비밀번호를 입력하세요.");
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginId, password }),
      });

      if (response.ok) {
        const redirectURL =
          new URLSearchParams(window.location.search).get("redirectURL") || "/";
        window.location.href = redirectURL;
      } else {
        const error = await response.json();
        setErrorMessage(error.message || "로그인에 실패하였습니다.");
      }
    } catch (err) {
      console.error("로그인 요청 중 오류:", err);
      setErrorMessage("네트워크 오류가 발생했습니다. 다시 시도하세요.");
    }
  };

  return (
    <div className="login-form">
      <div className="con">
        <div className="id">
          <p>아이디</p>
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div className="PW">
          <p>비밀번호</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="login-btn">
          <button onClick={handleLogin}>로그인</button>
        </div>
      </div>
    </div>
  );
}
