import './TopBar.css';

function Topbar() {
    return (
        <div className="top-bar">
          <div className="left-title">
            <div className="mypage-title">
              <h1>마이페이지</h1>
            </div>
          </div>
          <div className="right-title">
            <div className="mypage-point">
              <div className="mypage-exceptions">
                <span className="span-title">나의 기대평</span>
                <span className="span-subtitle">0</span>
              </div>
              <div className="mypage-review">
                <span className="span-title">후기</span>
                <span className="span-subtitle">0</span>
              </div>
              <div className="mypage-reservation-count">
                <span className="span-title">나의 예매권</span>
                <span className="span-subtitle">0</span>
              </div>
              <div className="mypage-edit-myInfo">
                <span className="span-title">나의 회원정보</span>
                <span className="span-subtitle">수정 &gt;</span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Topbar;