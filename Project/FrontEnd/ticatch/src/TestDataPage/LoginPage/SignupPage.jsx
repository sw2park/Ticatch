import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import style from "./SignupPage.module.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("/api/order/signup", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("회원가입 성공!");
        navigate("/login"); // 로그인으로 이동
      } else {
        alert(`회원가입 실패: ${response.data.message}`);
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <div className={style.signup_page}>
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/mainPage");
        }}
      >
        <span style={{ color: "black" }}>다</span>
        <span style={{ color: "red" }}>나오조</span>
      </h2>
      <form className={style.signup_form} onSubmit={handleSubmit}>
        <label htmlFor="userId" className={style.signup_label}>
          아이디
        </label>
        <input
          className={style.signup_input}
          type="text"
          id="userId"
          name="userId"
          placeholder="아이디"
          value={formData.userid}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">비밀번호</label>
        <input
          className={style.signup_input}
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          className={style.signup_input}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="비밀번호 확인"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">이름</label>
        <input
          className={style.signup_input}
          type="text"
          id="name"
          name="name"
          placeholder="이름"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">핸드폰</label>
        <input
          className={style.signup_input}
          type="text"
          id="phone"
          name="phone"
          placeholder="핸드폰"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">이메일</label>
        <input
          className={style.signup_input}
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <button className={style.signup_button} type="submit">
          가입완료
        </button>
        <button
          className={style.signup_button}
          type="button"
          onClick={() => navigate("/login")}
        >
          로그인하기
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
