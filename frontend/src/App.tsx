import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentPage from "./component/PaymentPage";
import ConfirmOrder from "./component/ConfirmOrder";
import CancelPayment from "./component/CancelPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/order-success" element={<ConfirmOrder />} />
        <Route path="/cancel-payment" element={<CancelPayment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
