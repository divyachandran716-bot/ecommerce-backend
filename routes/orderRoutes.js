// const express = require('express');
// const router = express.Router();
// const { createOrder, getOrders } = require('../controllers/orderController');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/', protect, createOrder);
// router.get('/', protect, getOrders);

// module.exports = router;


const router = require("express").Router();
const { createOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createOrder);

module.exports = router;