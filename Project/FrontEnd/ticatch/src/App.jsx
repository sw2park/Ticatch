import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SeatBooking from "./Seats/SeatBooking";
import Performance from "./Detail/Performance";

function App() {
  return (
    <div className="app-container">
      <SeatBooking />
      <Performance />
    </div>
  );
}

export default App;
