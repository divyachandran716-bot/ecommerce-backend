// const Order = require('../models/order');

// exports.createOrder = async (req, res) => {
//   const order = await Order.create({
//     user: req.user.id,
//     products: req.body.products,
//     total: req.body.total
//   });

//   res.json(order);
// };

// exports.getOrders = async (req, res) => {
//   const orders = await Order.find({ user: req.user.id }).populate('products');
//   res.json(orders);
// };

// const Order = require("../models/order");

// exports.createOrder = async (req, res) => {
//   const order = await Order.create({
//     ...req.body,
//     user: req.user.id
//   });

//   res.json(order);
// };

const Order = require("../models/order");

exports.createOrder = async (req, res, next) => {
  try {
    // 🔥 Fix: convert string → array
    if (typeof req.body.products === "string") {
      req.body.products = JSON.parse(req.body.products);
    }

    const order = await Order.create({
      ...req.body,
      user: req.user.id
    });

    res.json(order);
  } catch (error) {
    next(error);
  }
};