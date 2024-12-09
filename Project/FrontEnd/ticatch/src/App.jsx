import {useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios';
import MyPage from './pages/mypage/MyPage';

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [noSeatInfo, setNoSeatInfo] = useState(null); // 공통 상태 생성

   return (
       <div>
           {/* 받아온 값 : {data} */}
           <MyPage></MyPage>
       </div>
   );
}

export default App;