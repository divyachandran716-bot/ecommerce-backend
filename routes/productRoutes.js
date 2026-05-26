const router = require("express").Router();
const { createProduct, getProducts } = require("../controllers/productController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.post("/", protect, authorize("admin"), createProduct);
router.get("/", getProducts);

module.exports = router;
