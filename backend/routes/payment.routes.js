const {
  getPaymentInfo,
  getPaymentSuccess,
} = require("../controller/payment.controller");

const router = require("express").Router();

router.get("/get-payment-info", getPaymentInfo);

router.get("/get-payment-success", getPaymentSuccess);

module.exports = router;
