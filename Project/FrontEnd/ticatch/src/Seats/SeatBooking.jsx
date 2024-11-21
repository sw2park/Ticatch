import React, { useState } from "react";
import "./Seats.css";

const SeatBooking = () => {
  const totalGroups = 3; // 총 그룹 수
  const seatsPerGroup = 50; // 그룹당 좌석 수
  const [unavailableSeats, setUnavailableSeats] = useState(new Set());

  // 나중에 이 아래 코드를 DB에 send 해서 이미 예매된 좌석은 따로 구분하기
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [maxSeats, setMaxSeats] = useState(2);

  // 좌석 선택 및 해제
  const toggleSeatSelection = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // 선택 해제
      setSelectedSeats(selectedSeats.filter((num) => num !== seatNumber));
    } else if (selectedSeats.length < maxSeats) {
      // 선택
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  // 완료 버튼 클릭 이벤트
  const handleComplete = () => {
    if (selectedSeats.length === 0) {
      alert("선택된 좌석이 없습니다.");
      return;
    }

    // 선택된 좌석을 점유된 좌석으로 설정
    const newUnavailableSeats = new Set(unavailableSeats);
    selectedSeats.forEach((seat) => newUnavailableSeats.add(seat));
    setUnavailableSeats(newUnavailableSeats);

    alert(
      `선택된 좌석: ${selectedSeats.join(", ")}\n인원수: ${
        selectedSeats.length
      }\n\n예매가 완료되었습니다`
    );

    // 선택 초기화
    setSelectedSeats([]);
  };

  return (
    <div>
      <div className="info">
        선택한 좌석:{" "}
        <span>
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "없음"}
        </span>
        <br />
        인원수:
        <input
          type="number"
          value={maxSeats}
          min="1"
          max="10"
          onChange={(e) => setMaxSeats(parseInt(e.target.value, 10))}
        />
        <br />
        <br />
        <button onClick={handleComplete}>완료</button>
      </div>
      <div id="seat-groups">
        {[...Array(totalGroups)].map((_, groupIndex) => (
          <div key={groupIndex} className="seat-container">
            {[...Array(seatsPerGroup)].map((_, seatIndex) => {
              const seatNumber = groupIndex * seatsPerGroup + seatIndex + 1;
              const isUnavailable = unavailableSeats.has(seatNumber);
              const isSelected = selectedSeats.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  className={`seat ${
                    isUnavailable
                      ? "unavailable"
                      : isSelected
                      ? "selected"
                      : "available"
                  }`}
                  onClick={
                    !isUnavailable
                      ? () => toggleSeatSelection(seatNumber)
                      : null
                  }
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatBooking;
