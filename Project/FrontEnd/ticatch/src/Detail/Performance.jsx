import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";

const price = 10000;

const Performance = ({ selectedSeats = [] }) => {
  const finalPrice = price * selectedSeats.length;
  const [selectedDate, setSelectedDate] = useState(new Date()); // 날짜 상태 추가

  return (
    <div>
      <h2>뮤지컬 &lt;클로버&gt;</h2>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <p>VIP : 10 / 10</p>
      <p>A : 50 / 50</p>
      <p>R : 100 / 100</p>
      <p>S : 150 / 150</p>
      <p>대학로 자유극장</p>
      <p>2024년 11월 26일 (화) 20:00</p>

      {/* 선택된 날짜 표시 */}
      <h3>
        선택된 날짜:{" "}
        {selectedDate instanceof Date
          ? selectedDate.toLocaleDateString()
          : "날짜 오류"}
      </h3>

      {/* 선택된 좌석 표시 */}
      <h3>
        선택된 좌석:{" "}
        {Array.isArray(selectedSeats)
          ? selectedSeats.join(", ")
          : "좌석 데이터 오류"}
      </h3>

      {selectedSeats.length > 0 && <h4>총 {selectedSeats.length}명</h4>}

      {/* 총 가격 표시 */}
      <h2>총 가격: {finalPrice.toLocaleString()}원</h2>
    </div>
  );
};

export default Performance;
