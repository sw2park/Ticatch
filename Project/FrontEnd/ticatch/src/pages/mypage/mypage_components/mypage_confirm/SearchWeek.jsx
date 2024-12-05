import './SearchWeek.css'

function SearchWeek() {
  return (
    <>
      <p>기간별 조회</p>
      <div className="confirm-menu-button-section">
        <button className="confirm-menu-select-button">15일</button>
        <button className="confirm-menu-select-button">1개월</button>
        <button className="confirm-menu-select-button">2개월</button>
        <button className="confirm-menu-select-button">3개월</button>
      </div>
    </>
  );
}

export default SearchWeek;
