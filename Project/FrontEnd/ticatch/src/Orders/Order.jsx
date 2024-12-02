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

  // 등급 및 가격 구하기
  fetchId.map((item) => {
    // 쉼표가 숫자 사이에 있는 경우 무시하고 나머지는 분리
    const seatPriceArray = item.pdSeatprice.split(/,(?!\d)/);
    console.log("쉼표로 분리된 배열:", seatPriceArray);
  });

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

      {/* 좌석 등급 및 가격 표시 */}
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

      {/* 아래 어렵네 (등급에 따라 좌석을 등급별 가격으로 나누고 나눈 좌석선택시 그 등급이랑 좌석 표시됨 (모든 등급이 다 오는것도 아니고 아 모르겠음) */}
      <h2 style={{ textAlign: "center" }}>
        총액:{" "}
        {Array.isArray(selectedSeats) && selectedSeats.length > 0
          ? selectedSeats
              .reduce((total, seat) => {
                // fetchId에서 좌석별 가격 정보 추출
                const seatPrices = fetchId.reduce((prices, item) => {
                  const seatPriceArray = item.pdSeatprice.split(/,(?!\d)/); // 쉼표로 분리
                  console.log("쉼표로 분리된 배열:", seatPriceArray);

                  // 배열 길이에 따라 처리
                  if (seatPriceArray.length === 1) {
                    // 길이가 1인 경우 모든 좌석(A~P)에 동일 가격 적용
                    const match = seatPriceArray[0]
                      .trim()
                      .match(/([가-힣A-Z]+)\s([\d,]+)원/);
                    if (match) {
                      const price = parseInt(match[2].replace(/,/g, ""), 10);
                      for (let i = 0; i < 16; i++) {
                        const group = String.fromCharCode(65 + i); // A~P 그룹
                        prices[group] = price;
                      }
                      console.log("모든 좌석 동일 가격:", price);
                    }
                  } else {
                    // 길이가 2 이상인 경우 A~H, I~P로 나눔
                    const dividedLength = Math.ceil(16 / seatPriceArray.length); // 등급 간격 계산
                    seatPriceArray.forEach((seatPrice, index) => {
                      const match = seatPrice
                        .trim()
                        .match(/([가-힣A-Z]+)\s([\d,]+)원/);
                      if (match) {
                        const price = parseInt(match[2].replace(/,/g, ""), 10);

                        // 좌석 그룹(A~P) 나누기
                        if (index === 0) {
                          for (let i = 0; i < 8; i++) {
                            const group = String.fromCharCode(65 + i); // A~H
                            prices[group] = price;
                          }
                        } else if (index === 1) {
                          for (let i = 8; i < 16; i++) {
                            const group = String.fromCharCode(65 + i); // I~P
                            prices[group] = price;
                          }
                        }
                        console.log(
                          `좌석 등급 매핑: ${
                            match[1]
                          }, 가격: ${price}, 그룹: ${Object.keys(prices)}`
                        );
                      }
                    });
                  }

                  return prices;
                }, {}); // 좌석별 가격 매핑 완료

                // 선택한 좌석 번호에서 그룹(A~P) 추출
                const seatGroup = seat[0]; // 좌석 번호의 첫 글자 추출 (예: "A1" -> "A")
                const seatPrice = seatPrices[seatGroup] || 0; // 해당 그룹에 맞는 가격 가져오기
                console.log("좌석 그룹:", seatGroup, "가격:", seatPrice);

                return total + seatPrice; // 총액 계산
              }, 0)
              .toLocaleString("ko-KR") + "원"
          : "선택된 좌석이 없습니다."}
      </h2>

      <button className="reserve-button">예매하기</button>

      {/* test 용 */}
      <button className="reserve-button" onClick={() => fetchDetailById(3)}>
        fetchDetailById 데이터 가져오기
      </button>
    </div>
  );
};

export default Performance;
