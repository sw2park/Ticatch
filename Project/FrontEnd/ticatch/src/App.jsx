import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

export default App;
