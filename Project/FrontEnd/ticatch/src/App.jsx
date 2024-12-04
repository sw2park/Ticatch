import React, { useState } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Order from "./Orders/Order.jsx";

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [noSeatInfo, setNoSeatInfo] = useState(null); // 공통 상태 생성

  return (
    <div className="app-container">
      <div className="left">
        <SeatBooking
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          noSeatInfo={noSeatInfo}
        />
      </div>
      <div className="right">
        <div className="r r1">
          <Order selectedSeats={selectedSeats} setNoSeatInfo={setNoSeatInfo} />
        </div>
      </div>
    </div>
  );
};

export default App;
