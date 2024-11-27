import React, { useState } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Performance from "./Detail/Performance.jsx";

function Order() {
  alert("예매 완료!");
}

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // 날짜 상태 관리

  return (
    <div className="app-container">
      <div className="left">
        <SeatBooking
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
      </div>
      <div className="right">
        <div className="r r1">
          <Performance
            selectedSeats={selectedSeats}
            selectedDate={selectedDate} // 날짜 전달
          />
        </div>
      </div>
    </div>
  );
};

export default App;
