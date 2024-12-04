import React, { useState, useEffect } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Performance from "./Orders/Order.jsx";

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

   useEffect(() => {
       axios.get("/test")
       .then(res => setData(res.data))
       .catch(err => console.log(err))
   }, []);



export default App;
