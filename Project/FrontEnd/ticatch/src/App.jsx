import React, { useState } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Performance from "./Detail/Performance.jsx";
import Performance2 from "./Detail/Performance2.jsx";

function order() {
  alert("예매 성공!");
}

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
          <Performance2 />
        </div>
        <button className="reserve-button" onClick={order}>
          예매하기
        </button>
      </div>
    </div>
  );
};

export default App;
