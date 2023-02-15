import React, { useEffect } from "react";
import Axios from "axios";
import { baseUrl } from "../config/config";
import { useLocation } from "react-router";
import queryString from "query-string";

const ConfirmOrder = () => {
  const { search } = useLocation();

  let { PayerID, paymentId } = queryString.parse(search);

  const paymentByPaypalHandler = async () => {
    const result = await Axios.get(
      baseUrl +
        `/payment/get-payment-success?payerId=${PayerID}&paymentId=${paymentId}`
    );
    console.log(
      "🚀 ~ file: App.tsx:19 ~ paymentbyPaypalHandler ~ result",
      result.data
    );
  };

  useEffect(() => {
    paymentByPaypalHandler();
  }, []);
  return (
    <div>
      <h2 className="text-center py-3 text-2xl">
        Congratulations!! Your order is success
      </h2>
    </div>
  );
};

export default ConfirmOrder;
