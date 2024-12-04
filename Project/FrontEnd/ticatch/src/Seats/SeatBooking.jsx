import React from "react";
import "./Seats.css";

const rows = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
];
const seatsPerRow = 10;

const SeatBooking = ({ selectedSeats, setSelectedSeats }) => {
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
      <div className="stage-container">
        <div className="stage-box">STAGE</div>
      </div>
      <div id="seat-groups">
        {rows.map((row) => (
          <div key={row} className="seat-row">
            {/* 알파벳 표시 */}
            <div className="row-label">{row}</div>
            <div className="seat-container">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatBooking;
