const Product = require("../models/product");

exports.recommend = async (req, res) => {
  const { category } = req.query;

  const products = await Product.find({ category }).limit(5);

  res.json(products);
};
