import React, { useState } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Performance from "./Detail/Performance.jsx";
import Performance2 from "./Detail/Performance2.jsx";
import Calendar from "./Calendar/Calendar.jsx";

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date()); // 날짜 상태 추가

  return (
    <div className="app-container">
      <div className="left">
        <SeatBooking
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
        />
        <Calendar />
      </div>
      <div className="right">
        <div className="r r1">
          <Performance />
        </div>
        <div className="r r2">
          <Performance2
            selectedSeats={selectedSeats}
            selectedDate={selectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
