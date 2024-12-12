import React from "react";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";
// import "./login.css";

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="con">
        <LoginForm />
        <SocialLogin />
      </div>
    </div>
  );
}
