import React from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Performance from "./Detail/Performance.jsx";

const App = () => {
  return (
    <div className="app-container">
      <div className="left">
        <SeatBooking />
      </div>
      <div className="right">
        <div className="r r1">
          <Performance />
        </div>
        <div className="r r2">
          <button className="reserve-button">예매하기</button>
        </div>
      </div>
    </div>
  );
};

export default App;
