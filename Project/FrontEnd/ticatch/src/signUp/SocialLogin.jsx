import React from "react";

export default function SocialLogin() {
  const handleSocialLogin = (provider) => {
    // 소셜 로그인 URL (백엔드에서 제공)
    const loginUrl = `/oauth2/authorization/${provider.toLowerCase()}`;
    window.location.href = loginUrl;
  };

  return (
    <div className="login-2">
      <div className="naver" onClick={() => handleSocialLogin("naver")}>
        네이버
      </div>
      <div className="google" onClick={() => handleSocialLogin("google")}>
        구글
      </div>
    </div>
  );
}
