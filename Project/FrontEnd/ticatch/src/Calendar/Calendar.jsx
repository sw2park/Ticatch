import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import style from "./Calendar.module.css";

export default function Calendar({
  selectedDate,
  setSelectedDate,
  availableDays,
  maxSelectableDate,
}) {
  const getDayClassName = (date) => {
    const day = date.getDay();
    if (day === 0) return "react-datepicker__day--sunday";
    if (day === 6) return "react-datepicker__day--saturday";
    return "";
  };

  const filterDate = (date) => {
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    return availableDays.includes(dayNames[date.getDay()]);
  };

  return (
    <div className={style.calender_main}>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        minDate={new Date()}
        maxDate={maxSelectableDate}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        filterDate={filterDate}
        inline
        locale={ko}
        dayClassName={getDayClassName}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className={style.custom_header}>
            <button onClick={decreaseMonth}>&lt;</button>
            <span>{`${date.getFullYear()}.${String(
              date.getMonth() + 1
            ).padStart(2, "0")}`}</span>
            <button onClick={increaseMonth}>&gt;</button>
          </div>
        )}
      />
    </div>
  );
}
