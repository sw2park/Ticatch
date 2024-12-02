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

  // 스프링에 값 보내기

  // 스프링에서 id 가지고 오기
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
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [seatInfo, setSeatInfo] = useState([]);

  const calculateTotalPrice = () => {
    if (!Array.isArray(selectedSeats) || selectedSeats.length === 0) {
      return 0;
    }

    const seatPrices = fetchId.reduce((prices, item) => {
      const seatPriceArray = item.pdSeatprice.split(/,(?!\d)/);
      const groupSize = Math.ceil(16 / seatPriceArray.length);

      setSeatInfo([]); // 기존 정보 초기화

      seatPriceArray.forEach((seatPrice, index) => {
        const match = seatPrice.trim().match(/([가-힣A-Z]+)\s([\d,]+)원/);
        if (match) {
          const price = parseInt(match[2].replace(/,/g, ""), 10);
          const startIndex = index * groupSize;
          const endIndex = startIndex + groupSize;

          setSeatInfo((prevInfo) => [
            ...prevInfo,
            {
              grade: match[1],
              price: price,
              groupStart: String.fromCharCode(65 + startIndex),
              groupEnd: String.fromCharCode(65 + endIndex - 1),
            },
          ]);

          for (let i = startIndex; i < endIndex && i < 16; i++) {
            const group = String.fromCharCode(65 + i);
            prices[group] = price;
          }
        }
      });

      return prices;
    }, {});

    return selectedSeats.reduce((total, seat) => {
      const seatGroup = seat[0];
      const seatPrice = seatPrices[seatGroup] || 0;
      console.log("좌석 그룹:", seatGroup, "가격:", seatPrice);
      return total + seatPrice;
    }, 0);
  };

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice();
    setTotalPrice(newTotalPrice);
  }, [selectedSeats, fetchId]);

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
      {seatInfo && seatInfo.length > 0 ? (
        <div style={{ paddingTop: "15px", fontWeight: "bold" }}>
          {seatInfo.map((info, index) => (
            <div key={index}>
              {info.grade} {info.price.toLocaleString("ko-KR")}원, 그룹:{" "}
              {info.groupStart} ~ {info.groupEnd}
            </div>
          ))}
        </div>
      ) : (
        <ul style={{ paddingTop: "15px", fontWeight: "bold" }}>
          {fetchId.map((item) => (
            <li key={item.seqPfjoinId}>{item.pdSeatprice}</li>
          ))}
        </ul>
      )}

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

      <h2 style={{ textAlign: "center" }}>
        총액:{" "}
        {totalPrice > 0
          ? totalPrice.toLocaleString("ko-KR") + "원"
          : "선택된 좌석이 없습니다."}
      </h2>

      <button className="reserve-button">예매하기</button>

      {/* test 용 */}
      <button className="reserve-button" onClick={() => fetchDetailById(1)}>
        fetchDetailById 데이터 가져오기
      </button>
    </div>
  );
};

export default Performance;
