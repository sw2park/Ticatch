<<<<<<< HEAD
import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Footer from './component/footer/Footer.jsx'
import './component/footer/Footer.jsx'
import Header from './component/header/Header.jsx';

=======
import React, { useState } from "react";
import "./App.css";
import SeatBooking from "./Seats/SeatBooking.jsx";
import Order from "./Orders/Order.jsx";
>>>>>>> 3056983a26899a56f4d46e38736e8c91ca543f6b

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

<<<<<<< HEAD
   return (
       <div>
           받아온 값 : {data}
           <Header></Header>
           <Footer></Footer>
       </div>
   );
}

export default App;
=======
export default App;
>>>>>>> 3056983a26899a56f4d46e38736e8c91ca543f6b
