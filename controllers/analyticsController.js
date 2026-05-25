// const ProductModel = require('../models/product');
// const OrderModel = require('../models/order');

// exports.recommendProducts = async (req, res) => {
//   const orders = await OrderModel.find({ user: req.user.id }).populate('products');

//   const categories = orders.flatMap(order => order.products.map(p => p.category));

//   const recommended = await ProductModel.find({ category: { $in: categories } }).limit(5);

//   res.json(recommended);
// };

const Product = require("../models/product");

exports.recommend = async (req, res) => {
  const { category } = req.query;

  const products = await Product.find({ category }).limit(5);

  res.json(products);
};