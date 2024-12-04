import React, { useState, useEffect } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Performance from "./Orders/Order.jsx";

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

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
          <Performance selectedSeats={selectedSeats} />
        </div>
      </div>
    </div>
  );
};

export default App;
