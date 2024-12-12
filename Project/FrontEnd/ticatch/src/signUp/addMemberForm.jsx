import React, { useState } from "react";
import "./addMemberForm.css";

export default function AddMemberForm() {
  const [formData, setFormData] = useState({
    loginId: "",
    password: "",
    passwordConfirm: "",
    userName: "",
    phone: "",
  });

  const [errorMessages, setErrorMessages] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { loginId, password, passwordConfirm, userName, phone } = formData;
    let errors = {};

    if (!loginId) errors.loginId = "아이디를 입력하세요.";
    if (!password) errors.password = "비밀번호를 입력하세요.";
    if (password !== passwordConfirm)
      errors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
    if (!userName) errors.userName = "이름을 입력하세요.";
    if (!phone) errors.phone = "휴대폰 번호를 입력하세요.";

    setErrorMessages(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("/api/members/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("회원가입이 완료되었습니다.");
          window.location.href = "/login";
        } else {
          const errorData = await response.json();
          alert(errorData.message || "회원가입 실패");
        }
      } catch (error) {
        console.error("회원가입 중 오류 발생:", error);
        alert("네트워크 오류가 발생했습니다. 다시 시도하세요.");
      }
    }
  };

  return (
    <div className="create-user">
      <div className="con">
        <form className="create-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loginId">아이디</label>
            <input
              id="loginId"
              name="loginId"
              type="text"
              placeholder="아이디를 입력하세요."
              value={formData.loginId}
              onChange={handleChange}
            />
            {errorMessages.loginId && (
              <p className="error-message">{errorMessages.loginId}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={formData.password}
              onChange={handleChange}
            />
            {errorMessages.password && (
              <p className="error-message">{errorMessages.password}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">비밀번호 확인</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호를 입력하세요."
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
            {errorMessages.passwordConfirm && (
              <p className="error-message">{errorMessages.passwordConfirm}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="userName">이름</label>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="이름을 입력하세요."
              value={formData.userName}
              onChange={handleChange}
            />
            {errorMessages.userName && (
              <p className="error-message">{errorMessages.userName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phone">휴대폰</label>
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="휴대폰 번호를 입력하세요."
              value={formData.phone}
              onChange={handleChange}
            />
            {errorMessages.phone && (
              <p className="error-message">{errorMessages.phone}</p>
            )}
          </div>
          <div className="btn-box">
            <button type="submit" className="create-btn">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
