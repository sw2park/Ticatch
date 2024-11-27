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
        setDetail(response.data); // 응답 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("스프링 데이터 가져오기 에러:", error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  // 테스트
  const fetchDetailById = (id) => {
    axios
      .get(`/api/order/${id}`) // 특정 id를 기반으로 API 호출
      .then((response) => {
        setSelectedDetail(response.data); // 가져온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("특정 데이터 가져오기 에러:", error);
      });
  };

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

      {/* 공연 장소 및 회차 표시 */}
      <ul>
        {detail
          .filter((item) => item.seqPfjoinId === 1)
          .map((item) => (
            <li key={item.seqPfjoinId}>
              <p>{item.fdAddr}</p>
              <p>공연 회차: {item.pdTime}</p>
            </li>
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

      {/* 테스트 */}
      {/* 아직은 작동 안함 */}
      <button className="reserve-button" onClick={() => fetchDetailById(3)}>
        ID 1 데이터 가져오기
      </button>
    </div>
  );
};

export default Performance;
