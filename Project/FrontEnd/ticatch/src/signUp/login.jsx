import "./login.css";

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="con">
        <div className="login-form">
          <div className="id">
            <p>아이디</p>
            <input type="text" />
          </div>
          <div className="PW">
            <p>비밀번호</p>
            <input type="password" />
          </div>
          <div className="login-btn">
            <button>로그인</button>
          </div>
          <div className="login-2">
            <div className="naver">네이버</div>
            <div className="google">구글</div>
          </div>
        </div>
      </div>
    </div>
  );
}
