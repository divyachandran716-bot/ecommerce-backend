const Order = require("../models/order");

exports.createOrder = async (req, res, next) => {
  try {
    
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
