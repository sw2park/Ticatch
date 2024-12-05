import React, { useState, useEffect, useCallback, createContext } from "react";
import Calendar from "../Calendar/Calendar";
import axios from "axios";

import "./Order.css";

const Performance = ({ selectedSeats = [], setNoSeatInfo }) => {
  const [fetchId, setFetchId] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);
  const [maxSelectableDate, setMaxSelectableDate] = useState(
    new Date(2025, 11, 31)
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [seatInfo, setSeatInfo] = useState([]);

  // 전달해야되는 값들
  const seqPfjoinIds = fetchId.map((item) => item.seqPfjoinId);

  // Spring으로 데이터 전송
  // 이거 고치기
  const handleReservation = () => {
    const dataToSend = {
      seqPfjoinIds,
      selectedDate: selectedDate.toISOString().split("T")[0],
      totalPrice,
      selectedTime: currentPdTime[selectedTimeIndex],
      selectedSeatsInfo: selectedSeats.map((seat) => {
        const seatGroup = seat[0];
        const seatInfoForGroup = seatInfo.find(
          (info) => seatGroup >= info.groupStart && seatGroup <= info.groupEnd
        );
        return {
          seat,
          grade: seatInfoForGroup?.grade || "등급 없음",
          price: seatInfoForGroup?.price,
        };
      }),
    };

    console.log("전송할 데이터:", dataToSend);

    axios
      .post("/api/order/reservation", dataToSend)
      .then((response) => {
        console.log("데이터 전송 성공:", response.data);
        alert("예매가 완료되었습니다!");
      })
      .catch((error) => {
        console.error("데이터 전송 실패:", error);
        alert("예매에 실패했습니다.");
      });
  };

  // API 데이터 가져오기
  const fetchDetailById = useCallback((id) => {
    axios
      .get(`/api/order/${id}`)
      .then((response) => {
        const data = response.data;
        setFetchId(data);

        if (data.length > 0 && data[0].pendDate) {
          const [year, month, day] = data[0].pendDate.split(".");
          setMaxSelectableDate(new Date(year, parseInt(month) - 1, day));
        }
      })
      .catch((error) => console.error("데이터 가져오기 에러:", error));
  }, []);

  // 데이터 전송 함수
  const sendDataToBackend = async () => {
    const dataToSend = {
      seqPfjoinIds,
      selectedDate: selectedDate.toISOString().split("T")[0], // 날짜 (YYYY-MM-DD)
      selectedTime: currentPdTime[selectedTimeIndex] || "시간 정보 없음", // 현재 선택된 시간
    };

    try {
      const response = await axios.post("/api/order/data", dataToSend);
      console.log("백엔드 전송 성공:", response.data);
      setNoSeatInfo(response.data);
    } catch (error) {
      console.error("백엔드 전송 실패:", error);
    }
  };

  // selectedDate 변경 시 데이터 전송
  useEffect(() => {
    sendDataToBackend();
  }, [selectedDate]);

  // selectedDate 변경 시 데이터 전송
  useEffect(() => {
    sendDataToBackend();
  }, [selectedTimeIndex]);

  // 백에서 가지고온 좌석 정보 SeatBooking 으로 넘겨주는거
  useEffect(() => {
    if (selectedSeats.length === 0) {
      setNoSeatInfo("No seats selected");
    } else {
      setNoSeatInfo(`Selected seats: ${selectedSeats.join(", ")}`);
    }
  }, [selectedDate, selectedTimeIndex]);

  // 공연 시간을 포맷팅
  const formatPdTime = useCallback((pdTime) => {
    try {
      const day = pdTime.match(/^[가-힣]+/)[0];
      const times = pdTime.match(/\((.*?)\)/)[1].split(",");
      return times.map((time) => `${day}(${time})`);
    } catch {
      return ["형식 오류"];
    }
  }, []);

  // 좌석 및 가격 정보 계산
  const calculateSeatInfo = useCallback(() => {
    const seatPrices = fetchId.reduce((prices, item) => {
      const seatPriceArray = item.pdSeatprice.split(/,(?!\d)/);
      const groupSize = Math.ceil(16 / seatPriceArray.length);
      const seatData = [];

      seatPriceArray.forEach((seatPrice, index) => {
        const match = seatPrice.trim().match(/([가-힣A-Z]+)\s([\d,]+)원/);
        if (match) {
          const price = parseInt(match[2].replace(/,/g, ""), 10);
          const startIndex = index * groupSize;
          const endIndex = startIndex + groupSize;

          seatData.push({
            grade: match[1],
            price,
            groupStart: String.fromCharCode(65 + startIndex),
            groupEnd: String.fromCharCode(65 + Math.min(endIndex, 16) - 1),
          });

          for (let i = startIndex; i < endIndex && i < 16; i++) {
            prices[String.fromCharCode(65 + i)] = price;
          }
        }
      });

      setSeatInfo(seatData);
      return prices;
    }, {});

    return seatPrices;
  }, [fetchId]);

  // 총 가격 계산
  const calculateTotalPrice = useCallback(() => {
    const seatPrices = calculateSeatInfo();
    return selectedSeats.reduce((total, seat) => {
      return total + (seatPrices[seat[0]] || 0);
    }, 0);
  }, [selectedSeats, calculateSeatInfo]);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [selectedSeats, fetchId, calculateTotalPrice]);

  // 좌석 선택 시 등급과 가격 출력
  useEffect(() => {
    selectedSeats.forEach((seat) => {
      const seatGroup = seat[0];
      const seatInfoForGroup = seatInfo.find(
        (info) => seatGroup >= info.groupStart && seatGroup <= info.groupEnd
      );
      if (seatInfoForGroup) {
        console.log(
          `선택한 좌석: ${seat}, 등급: ${
            seatInfoForGroup.grade
          }, 가격: ${seatInfoForGroup.price.toLocaleString("ko-KR")}원`
        );
      }
    });
  }, [selectedSeats, seatInfo]);

  const currentPdTime =
    fetchId.length > 0 ? formatPdTime(fetchId[0].pdTime) : [];

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
        availableDays={fetchId.length > 0 ? [fetchId[0].pdTime[0]] : []}
        maxSelectableDate={maxSelectableDate}
      />

      {seatInfo.length > 0 ? (
        <div className="seat-info">
          {seatInfo.map((info, index) => (
            <div key={index} className="time-selector">
              {info.grade} {info.price.toLocaleString("ko-KR")}원, 그룹:{" "}
              {info.groupStart} ~ {info.groupEnd}
            </div>
          ))}
        </div>
      ) : (
        <div>좌석 및 가격 정보가 없습니다.</div>
      )}

      <div className="time-selector">
        <button
          onClick={() =>
            setSelectedTimeIndex(Math.max(0, selectedTimeIndex - 1))
          }
          disabled={selectedTimeIndex === 0}
        >
          &lt;
        </button>
        <span>{currentPdTime[selectedTimeIndex]}</span>
        <button
          onClick={() =>
            setSelectedTimeIndex(
              Math.min(currentPdTime.length - 1, selectedTimeIndex + 1)
            )
          }
          disabled={selectedTimeIndex >= currentPdTime.length - 1}
        >
          &gt;
        </button>
      </div>

      <h3>공연날: {selectedDate.toLocaleDateString().slice(0, -1)}</h3>
      <h3>선택된 좌석: {selectedSeats.join(", ") || "없음"}</h3>
      <h2>총액: {totalPrice.toLocaleString("ko-KR")}원</h2>

      <button
        className="reserve-button"
        onClick={() => {
          selectedSeats.length != 0
            ? handleReservation()
            : alert("좌석을 선택해주세요");
        }}
      >
        예매하기
      </button>

      <button className="reserve-button" onClick={() => fetchDetailById(1)}>
        데이터 가져오기
      </button>
    </div>
  );
};

export default Performance;
