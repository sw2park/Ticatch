import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SeatBooking from "./Seats/SeatBooking";
import Performance from "./Detail/Performance";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("/api/hello")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>받아온 값 : {data}</h1>
      <SeatBooking />
      <Performance />
    </div>
  );
}

export default App;
