import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "../Calendar/Calendar.css";

export default function Calendar({ selectedDate, setSelectedDate }) {
  // 상태 전달받음
  const maxSelectableDate = new Date(2024, 11, 31); // 한달 더 선택가능함

  const getDayClassName = (date) => {
    const day = date.getDay();
    if (day === 0) return "react-datepicker__day--sunday";
    if (day === 6) return "react-datepicker__day--saturday";
    return "";
  };

  return (
    <DatePicker
      dateFormat="yyyy.MM.dd"
      minDate={new Date()}
      maxDate={maxSelectableDate}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)} // 날짜 변경 시 부모 상태 업데이트
      inline
      locale={ko}
      dayClassName={getDayClassName}
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <div className="custom-header">
          <button onClick={decreaseMonth}>&lt;</button>
          <span>{`${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
            2,
            "0"
          )}`}</span>
          <button onClick={increaseMonth}>&gt;</button>
        </div>
      )}
    />
  );
}
