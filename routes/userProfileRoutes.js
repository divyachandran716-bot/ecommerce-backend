const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  deleteUser
} = require("../controllers/userProfile");

const {
  protect,
  authorize
} = require("../middleware/authMiddleware");

router.get("/", protect, authorize("admin"), getAllUsers);
router.get("/", protect, (req, res) => {
  res.json(req.user);
});
router.get("/me", protect, getUserProfile);
router.put("/me", protect, updateUserProfile);
router.delete("/:id", protect, deleteUser);

module.exports = router;
