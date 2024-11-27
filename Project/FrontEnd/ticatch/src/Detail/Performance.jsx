import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import axios from "axios";

import "../Detail/Performance.css";

const Performance = ({ selectedSeats = [] }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 날짜 상태 추가
  const [detail, setDetail] = useState([]); // detail 상태를 Performance 컴포넌트 내부로 이동

  // 스프링 API 호출
  useEffect(() => {
    axios
      .get(`/api/order`)
      .then((response) => {
        // console.log(response.data); // API 응답 데이터 확인
        setDetail(response.data); // 응답 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("스프링 데이터 가져오기 에러:", error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  return (
    <div>
      <ul>
        {detail
          .filter((item) => item.seqPfjoinId === 1)
          .map((item) => (
            <li key={item.seqPfjoinId}>
              [ {item.pgenre} ]<h3>&lt;{item.ptitle}&gt;</h3>
            </li>
          ))}
      </ul>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <p style={{ textAlign: "center", color: "#004d7c", fontWeight: "bold" }}>
        VIP : 10석 | A : 50석
      </p>
      <p style={{ textAlign: "center", color: "#004d7c", fontWeight: "bold" }}>
        R : 100석 | S : 150석
      </p>

      <ul>
        {detail
          .filter((item) => item.seqPfjoinId === 1)
          .map((item) => (
            <li key={item.seqPfjoinId}>
              <p>{item.fdAddr}</p>
              <p>공연 회차: {item.pdTime}</p>
            </li> // seqPfjoinId를 key로 사용
          ))}
      </ul>

      {/* 선택된 날짜 표시 */}
      <h3>
        공연날:{" "}
        {selectedDate instanceof Date
          ? selectedDate.toLocaleDateString().slice(0, -1)
          : "날짜 오류"}
      </h3>

      {/* 선택된 좌석 표시 */}
      <h3>
        선택된 좌석:{" "}
        {Array.isArray(selectedSeats)
          ? selectedSeats.join(", ")
          : "좌석 데이터 오류"}
      </h3>

      {/* 총 가격 표시 */}
      <h2 style={{ textAlign: "center" }}>총 가격: 원</h2>
      <button className="reserve-button">예매하기</button>
    </div>
  );
};

export default Performance;
