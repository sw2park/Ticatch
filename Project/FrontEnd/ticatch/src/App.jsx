import {useEffect, useState } from 'react'
// import './App.css'
import axios from 'axios';
import MyPage from './pages/mypage/MyPage';


const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

   useEffect(() => {
       axios.get("/test")
       .then(res => setData(res.data))
       .catch(err => console.log(err))
   }, []);

   return (
       <div>
           {/* 받아온 값 : {data} */}
           <MyPage></MyPage>
       </div>
   );
}

export default App;
