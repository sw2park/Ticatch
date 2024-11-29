import React, { useState, useEffect } from "react";
import Calendar from "../Calendar/Calendar";
import axios from "axios";

import "./Order.css";

const Performance = ({ selectedSeats = [] }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fetchId, setFetchId] = useState([]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const [maxSelectableDate, setMaxSelectableDate] = useState(
    new Date(2025, 11, 31)
  );

  const fetchDetailById = (id) => {
    axios
      .get(`/api/order/${id}`)
      .then((response) => {
        setFetchId(response.data);
        if (response.data.length > 0 && response.data[0].pendDate) {
          const [year, month, day] = response.data[0].pendDate.split(".");
          setMaxSelectableDate(new Date(year, parseInt(month) - 1, day));
        }
      })
      .catch((error) => {
        console.error("데이터 가져오기 에러:", error);
      });
  };

  const formatPdTime = (pdTime) => {
    try {
      const day = pdTime.match(/^[가-힣]+/)[0];
      const times = pdTime.match(/\((.*?)\)/)[1].split(",");
      return times.map((time) => `${day}(${time})`);
    } catch (error) {
      return ["형식 오류"];
    }
  };

  const currentPdTime =
    fetchId.length > 0 ? formatPdTime(fetchId[0].pdTime) : [];

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

  // 가능한 요일 추출
  const availableDays =
    fetchId.length > 0
      ? [fetchId[0].pdTime.match(/^[가-힣]+/)[0].split("")[0]]
      : [];

  return (
    <div>
      <ul>
        {fetchId.map((item) => (
          <li key={item.seqPfjoinId}>
            [ {item.pgenre} ]<h3>&lt;{item.ptitle}&gt;</h3>
          </li>
        ))}
      </ul>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        availableDays={availableDays}
        maxSelectableDate={maxSelectableDate}
      />

      {/* 좌석 등급 및 가격 */}
      <ul style={{ textAlign: "center", fontWeight: "bold" }}>
        {fetchId.map((item) => (
          <li key={item.seqPfjoinId}>{item.pdSeatprice}</li>
        ))}
      </ul>

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
            {currentPdTime[selectedTimeIndex]}
          </span>
          <button
            className="simple-slider-arrow"
            onClick={handleNext}
            disabled={selectedTimeIndex === currentPdTime.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>

      <h3>
        공연날:{" "}
        {selectedDate instanceof Date
          ? selectedDate.toLocaleDateString().slice(0, -1)
          : "날짜 오류"}
      </h3>

      <h3>
        선택된 좌석:{" "}
        {Array.isArray(selectedSeats)
          ? selectedSeats.join(", ")
          : "좌석 데이터 오류"}
      </h3>

      <h2 style={{ textAlign: "center" }}>총 가격: 원</h2>
      <button className="reserve-button">예매하기</button>

      {/* test 용 */}
      <button className="reserve-button" onClick={() => fetchDetailById(1)}>
        fetchDetailById 데이터 가져오기
      </button>
    </div>
  );
};

export default Performance;
