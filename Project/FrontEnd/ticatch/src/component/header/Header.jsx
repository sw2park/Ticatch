import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="con top-con">
          <div className="logo-box">
            <Link to="/">다나오조</Link>
          </div>
          <nav className="join">
            <div>
              <Link to="/login">로그인</Link>
            </div>
            <div>
              <Link to="/signup">회원가입</Link>
            </div>
          </nav>
          <nav className="menu-1">
            <ul>
              <li>
                <Link to="/menu1">메뉴아이템1</Link>
              </li>
              <li>
                <Link to="/menu2">메뉴아이템2</Link>
              </li>
              <li>
                <Link to="/menu3">메뉴아이템3</Link>
              </li>
              <li>
                <Link to="/menu4">메뉴아이템4</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr />
    </header>
  );
}
