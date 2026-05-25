// const Product = require('../models/product');

// exports.createProduct = async (req, res) => {
//   const product = await Product.create(req.body);
//   res.json(product);
// };

// exports.getProducts = async (req, res) => {
//   let query = {};

//   if (req.query.category) query.category = req.query.category;

//   if (req.query.search) {
//     query.name = { $regex: req.query.search, $options: 'i' };
//   }

//   const products = await Product.find(query);
//   res.json(products);
// };

// exports.updateProduct = async (req, res) => {
//   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//   res.json(product);
// };

// exports.deleteProduct = async (req, res) => {
//   await Product.findByIdAndDelete(req.params.id);
//   res.json({ message: 'Deleted' });
// };

const Product = require("../models/product");

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const { keyword, category, minPrice, maxPrice, sort } = req.query;

  let query = {};

  if (keyword) query.name = { $regex: keyword, $options: "i" };
  if (category) query.category = category;

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }

  let data = Product.find(query);

  if (sort) data = data.sort(sort);

  res.json(await data);
};