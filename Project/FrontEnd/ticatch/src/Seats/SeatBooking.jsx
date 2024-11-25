import React, { useState } from "react";
import "./Seats.css";

const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
const seatsPerRow = 10;

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, number) => {
    const seat = `${row}${number}`;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div>
      <div className="info">좌석을 선택하세요</div>
      <div id="seat-groups">
        {rows.map((row) => (
          <div key={row} className="seat-container">
            {Array.from({ length: seatsPerRow }, (_, index) => (
              <div
                key={index}
                className={`seat ${
                  selectedSeats.includes(`${row}${index + 1}`)
                    ? "selected"
                    : "available"
                }`}
                onClick={() => handleSeatClick(row, index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="info">
        <h3>선택된 좌석:</h3>
        {selectedSeats.join(", ")}
      </div>
    </div>
  );
};

export default SeatBooking;
