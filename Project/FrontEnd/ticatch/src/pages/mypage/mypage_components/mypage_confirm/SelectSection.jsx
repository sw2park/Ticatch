import "./SelectSection.css";
import { MypageContext } from "../../mypageContext/mypageContext";
import { useContext, useState } from "react";

function SelectSection() {
  const { handleModeSelect } = useContext(MypageContext);
  const { handleMonthSelect } = useContext(MypageContext);
  const { handleYearSelect } = useContext(MypageContext);
  const { selectMode } = useContext(MypageContext);
  const { selectMonth } = useContext(MypageContext);
  const { selectYear } = useContext(MypageContext);

  const data = {
    mode: "1개월",
    month: "월",
    year: "연도",
  };

  async function handleClickBtn() {
    console.log("클릭함");
    // 데이터 세팅하고
    data.mode = selectMode;
    data.month = selectMonth;
    data.year = selectYear;

    // post 요청 보내기
    // 기간별 조회로
    try {
      const result = await fetch("/api/mypage/searchConfirmQuery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <p>월 별 조회</p>
      <div
        className="confirm-menu-search-select"
        onChange={handleModeSelect}
        value={selectMode}
      >
        <select name="search-mode">
          <option value="buy_date">예매일</option>
          <option value="view_date">관람일</option>
        </select>
        <select
          name="search-mode-year"
          onChange={handleYearSelect}
          value={selectYear}
        >
          <option value="2024">2024년</option>
          <option value="2023">2023년</option>
          <option value="2022">2022년</option>
        </select>
        <select
          name="search-mode-month"
          onChange={handleMonthSelect}
          value={selectMonth}
        >
          <option value="1">1월</option>
          <option value="2">2월</option>
          <option value="3">3월</option>
          <option value="4">4월</option>
          <option value="5">5월</option>
          <option value="6">6월</option>
          <option value="7">7월</option>
          <option value="8">8월</option>
          <option value="9">9월</option>
          <option value="10">10월</option>
          <option value="11">11월</option>
          <option value="12">12월</option>
        </select>
        <button onClick={handleClickBtn}>조회</button>
      </div>
    </>
  );
}

export default SelectSection;
