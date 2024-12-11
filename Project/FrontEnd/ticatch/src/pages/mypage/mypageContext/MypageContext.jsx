import { createContext } from "react";
import { useState } from "react";

export const MypageContext = createContext({
  searchWeek: "1개월",
  selectSection: {
    selectMode: "예매일",
    selectMonth: "연도",
    selectYear: "월",
  },
  handleModeSelect: () => {},
  handleMonthSelect: () => {},
  handleYearSelect: () => {},
  handleWeekSelect: () => {},
});

export default function MypageContextProvider({ children }) {
  const [searchWeek, setSearchWeek] = useState("1개월");

  const [selectMode, setSelectMode] = useState("예매일");
  const [selectMonth, setSelectMonth] = useState("연도");
  const [selectYear, setSelectYear] = useState("월");

  const handleModeSelect = (e) => {
    console.log(e.target.value);
    setSelectMode(e.target.value);
  };

  const handleMonthSelect = (e) => {
    console.log(e.target.value);
    setSelectMonth(e.target.value);
  };

  const handleYearSelect = (e) => {
    console.log(e.target.value);
    setSelectYear(e.target.value);
  };

  const handleWeekSelect = (e) => {
    console.log(e.target.value);
    setSearchWeek(e.target.value);
  };

  return (
    <MypageContext.Provider
      value={{
        searchWeek,
        selectMode,
        selectMonth,
        selectYear,
        handleModeSelect,
        handleMonthSelect,
        handleYearSelect,
        handleWeekSelect,
      }}
    >
      {children}
    </MypageContext.Provider>
  );
}
