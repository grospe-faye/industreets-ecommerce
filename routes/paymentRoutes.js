const express = require("express");
const router = express.Router();
const paymentController = require('../controllers/paymentControllers')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/payment')
    .get(auth, authAdmin, paymentController.getPayments)
    .post(auth, paymentController.createPayment)

module.exports = router