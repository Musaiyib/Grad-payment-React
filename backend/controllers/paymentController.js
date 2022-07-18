const asyncHandler = require("express-async-handler");
const Payments = require("../models/paymentModel");

// get all payment
const getPayments = asyncHandler(async (req, res) => {
  const payments = await Payments.find();

  res.status(200).json({ payments });
});

// add payment
const setPayment = asyncHandler(async (req, res) => {
  const { name, regNo, amount, phone } = req.body;
  if (!name || !regNo || !amount || !phone) {
    return res.status(400).json("name, regNo and amount are required");
  }
  const duplicate = await Payments.findOne({ regNo });
  if (duplicate) return res.status(409).json("Reg_no already exits");
  try {
    const createPayment = await Payments.create({
      name,
      regNo,
      amount,
      phone,
    });
    return res.status(201).json(createPayment);
  } catch (error) {
    console.log(error);
    // return res.status(400).json("Unable to add payment");
  }
});

//update payment
const updatePayment = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const payment = await Payments.findById(id);
  if (!payment) {
    res.status(404).json("Payment not found");
  }
  const update = await Payments.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(update);
});

// delete payment
const deletePayment = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const payment = await Payments.findById(id);
  if (!payment) {
    res.status(404).json("payment not found");
  }
  await payment.remove();
  const payments = await Payments.find();
  res.status(200).json(payments);
});

module.exports = { getPayments, setPayment, updatePayment, deletePayment };
