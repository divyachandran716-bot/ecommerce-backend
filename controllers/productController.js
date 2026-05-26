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
