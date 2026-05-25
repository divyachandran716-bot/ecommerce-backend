// const express = require('express');
// const router = express.Router();
// const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
// const { protect, authorize } = require('../middleware/authMiddleware');

// router.post('/', protect, authorize('admin'), createProduct);
// router.get('/', getProducts);
// router.put('/:id', protect, authorize('admin'), updateProduct);
// router.delete('/:id', protect, authorize('admin'), deleteProduct);

// module.exports = router;


const router = require("express").Router();
const { createProduct, getProducts } = require("../controllers/productController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", protect, authorize("admin"), createProduct);
router.get("/", getProducts);

module.exports = router;