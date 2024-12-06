import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import OrderPage from "./OrderPage/OrderPage";
import FinishOrder from "./FinishOrder/FinishOrder";
import { SuccessPage } from "./TossPayments/Success";
import { FailPage } from "./TossPayments/Fail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/finishOrder" element={<FinishOrder />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
