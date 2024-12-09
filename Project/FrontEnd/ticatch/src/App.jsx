
import {useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import Main from './detail/component/Main.jsx';
import Test from './detail/component/Test.jsx';
import MainTest from './detail/component/MainTest.jsx';
import DetailList from './detail/component/DetailList.jsx';
import TestConnection from './detail/component/TestConnection.jsx';
import DetailMain from './detail/component/Main.jsx';
import KakaoMap from './detail/component/KakaoMap.jsx';


import "./App.css";
import OrderPage from "./OrderPage/OrderPage";
import { CheckoutPage } from "./TossPayments/Checkout";
import { SuccessPage } from "./TossPayments/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/checkout" element={<CheckoutPage />} />
        <Route path="/order/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
};


   return (
    //    <div>
    //        받아온 값 : {data}
    //    </div>
    //    <>
    //     <Main />
    //    </>
      //  <>
      //   <Test />
      //  </>
      // <>
      //   <TestConnection/>
      // </>
    // <>
    //      <DetailList/>
    // </>
    <Router>
      <Routes>
        <Route path="/detail/:seqpfjoinId/view" element={<DetailMain />} /> {/* component 대신 element 사용 */}
      </Routes>
    </Router>
    
    // <KakaoMap />
   );
}


export default App;


