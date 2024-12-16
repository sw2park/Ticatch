import React, { useState } from "react";
import style from "./OrderPage.module.css";
import SeatBooking from "../Seats/SeatBooking.jsx";
import Order from "../Orders/Order.jsx";

const OrderPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [noSeatInfo, setNoSeatInfo] = useState(null); // 공통 상태 생성

  return (
    <div className={style.app_container}>
      <div className={style.left}>
        <SeatBooking
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          noSeatInfo={noSeatInfo}
        />
      </div>
      <div className={style.right}>
        <div className={style.r}>
          <Order selectedSeats={selectedSeats} setNoSeatInfo={setNoSeatInfo} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
