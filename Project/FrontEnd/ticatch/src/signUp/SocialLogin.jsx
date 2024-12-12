import React from "react";
import "./LoginForm.css";

export default function SocialLogin() {
  const handleSocialLogin = (provider) => {
    const loginUrl = `/oauth2/authorization/${provider.toLowerCase()}`;
    window.location.href = loginUrl;
  };

  return (
    <div className="social-login">
      <button className="naver" onClick={() => handleSocialLogin("naver")}>
        네이버
      </button>
      <button className="google" onClick={() => handleSocialLogin("google")}>
        구글
      </button>
    </div>
  );
}
