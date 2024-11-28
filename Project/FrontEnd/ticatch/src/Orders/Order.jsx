import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import axios from "axios";

import "./Order.css";

const Performance = ({ selectedSeats = [] }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // 날짜 상태 추가
  // const [detail, setDetail] = useState([]); // detail 상태를 Performance 컴포넌트 내부로 이동
  const [fetchId, setfetchId] = useState([]); // id 스프링에서 가지고와서 set 하는거

  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0); // 현재 표시 중인 회차의 인덱스

  // 스프링 API 호출
  // useEffect(() => {
  //   axios
  //     .get(`/api/order`)
  //     .then((response) => {
  //       setDetail(response.data); // 응답 데이터를 상태에 저장
  //     })
  //     .catch((error) => {
  //       console.error("스프링 데이터 가져오기 에러:", error);
  //     });
  // }, []); // 컴포넌트가 마운트될 때 한 번 실행

  // SEQ_ID 값으로 오는거 만 출력
  const fetchDetailById = (id) => {
    axios
      .get(`/api/order/${id}`) // 특정 id를 기반으로 API 호출
      .then((response) => {
        setfetchId(response.data); // 가져온 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error("test 데이터 가져오기 에러:", error);
      });
  };

  // 회차 쪼개서 보여주는거
  const formatPdTime = (pdTime) => {
    try {
      const day = pdTime.match(/^[가-힣]+/)[0]; // 요일 추출
      const times = pdTime.match(/\((.*?)\)/)[1].split(","); // 괄호 안의 시간 분리
      return times.map((time) => `${day}(${time})`);
    } catch (error) {
      console.error("pdTime 형식 오류:", pdTime);
      return ["형식 오류"];
    }
  };

  // 현재 표시 중인 회차
  const currentPdTime =
    fetchId.length > 0 ? formatPdTime(fetchId[0].pdTime) : [];

  // 화살표 버튼 핸들러
  const handleNext = () => {
    if (selectedTimeIndex < currentPdTime.length - 1) {
      setSelectedTimeIndex(selectedTimeIndex + 1);
    }
  };
  const handlePrev = () => {
    if (selectedTimeIndex > 0) {
      setSelectedTimeIndex(selectedTimeIndex - 1);
    }
  };

  return (
    <div>
      <ul>
        {fetchId.map((item) => (
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
      <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <p style={{ marginRight: "10px", fontWeight: "bold" }}>공연 회차:</p>
        <div className="simple-slider-container">
          <button
            className="simple-slider-arrow"
            onClick={handlePrev}
            disabled={selectedTimeIndex === 0}
          >
            &lt;
          </button>
          <span className="simple-slider-content">
            {formatPdTime(fetchId[0]?.pdTime || [])[selectedTimeIndex]}
          </span>
          <button
            className="simple-slider-arrow"
            onClick={handleNext}
            disabled={
              selectedTimeIndex ===
              formatPdTime(fetchId[0]?.pdTime || []).length - 1
            }
          >
            &gt;
          </button>
        </div>
      </div>

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

      {/* 테스트 (나중에는 Detial 페이지에서 seq_id 를 가지고와서 보여주는거임) */}
      <button className="reserve-button" onClick={() => fetchDetailById(2)}>
        fetchDetailById 데이터 가져오기
      </button>
    </div>
  );
};

export default Performance;
