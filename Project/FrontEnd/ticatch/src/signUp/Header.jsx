import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="con top-con">
          <div className="logo-box">
            <a href="#">다나오조</a>
          </div>
          <nav className="join">
            <div>
              <a href="#">로그인</a>
            </div>
            <div>
              <a href="#">회원가입</a>
            </div>
          </nav>
          <nav className="menu-1">
            <ul>
              <li>
                <a href="#">메뉴아이템1</a>
              </li>
              <li>
                <a href="#">메뉴아이템2</a>
              </li>
              <li>
                <a href="#">메뉴아이템3</a>
              </li>
              <li>
                <a href="#">메뉴아이템4</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </header>
  );
}
