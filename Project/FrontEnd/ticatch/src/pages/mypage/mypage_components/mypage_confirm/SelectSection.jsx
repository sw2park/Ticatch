import "./SelectSection.css";

function SelectSection() {
  return (
    <>
      <p>월 별 조회</p>
      <div className="confirm-menu-search-select">
        <select name="" id="">
          <option value="">예매일</option>
          <option value="">관람일</option>
        </select>
        <select name="" id="">
          <option value="">2024년</option>
          <option value="">2023년</option>
          <option value="">2022년</option>
        </select>
        <select name="" id="">
          <option value="">1월</option>
          <option value="">2월</option>
          <option value="">3월</option>
          <option value="">4월</option>
          <option value="">5월</option>
          <option value="">6월</option>
          <option value="">7월</option>
          <option value="">8월</option>
          <option value="">9월</option>
          <option value="">10월</option>
          <option value="">11월</option>
          <option value="">12월</option>
        </select>
        <button>조회</button>
      </div>
    </>
  );
}

export default SelectSection;
