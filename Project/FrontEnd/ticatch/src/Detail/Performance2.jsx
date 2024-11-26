import React from "react";

const price = 10000;

const Performance2 = ({ selectedSeats, selectedDate }) => {
  const finalPrice = price * selectedSeats.length;

  return (
    <div>
      <p>VIP : 10 / 10</p>
      <p>A : 50 / 50</p>
      <p>R : 100 / 100</p>
      <p>S : 150 / 150</p>
      <p>대학로 자유극장</p>
      <p>2024년 11월 26일 (화) 20:00</p>

      <h3>
        선택된 날짜:{" "}
        {selectedDate.toLocaleDateString("ko-KR", { dateStyle: "full" })}
      </h3>
      <h3>선택된 좌석: {selectedSeats.join(", ")}</h3>
      {selectedSeats.length > 0 && <h4>총 {selectedSeats.length}명</h4>}
      <h2>총 가격: {finalPrice.toLocaleString()}원</h2>
    </div>
  );
};

export default Performance2;
