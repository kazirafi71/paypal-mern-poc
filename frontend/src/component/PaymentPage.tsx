import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Axios from "axios";
import { baseUrl } from "../config/config";

const PaymentPage = () => {
  const [paypalInfo, setPaypalInfo] = useState("");

  const paymentByPaypalHandler = async () => {
    const result = await Axios.get(baseUrl + "/payment/get-payment-info");
    console.log(
      "🚀 ~ file: App.tsx:19 ~ paymentbyPaypalHandler ~ result",
      result.data
    );
    let url = result.data.links[1].href;
    window.location.href = result.data.links[1].href;
  };
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 bg-green-500 py-4">
          Paypal Payment Testing
        </h2>
        <h1 className="text-3xl font-bold">Total AMount: $10</h1>
        <button
          onClick={paymentByPaypalHandler}
          className="border p-2 bg-gray-300 rounded-full"
        >
          Pay With Paypal
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
