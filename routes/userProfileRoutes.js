// const express = require('express');
// const router = express.Router();

// const {
//   getProfile,
//   updateProfile,
//   deleteProfile,
//   getAllUsers
// } = require('../controllers/userProfile');

// const { protect, authorize } = require('../middleware/authMiddleware');


// // User routes
// router.get('/me', protect, getProfile);
// router.put('/me', protect, updateProfile);
// router.delete('/me', protect, deleteProfile);

// // Admin route
// router.get('/', protect, authorize('admin'), getAllUsers);

// module.exports = router;


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


// ✅ GET ALL USERS (Admin only)
router.get("/", protect, authorize("admin"), getAllUsers);

router.get("/", protect, (req, res) => {
  res.json(req.user);
});


// ✅ GET LOGGED-IN USER PROFILE
router.get("/me", protect, getUserProfile);


// ✅ UPDATE LOGGED-IN USER PROFILE
router.put("/me", protect, updateUserProfile);


// ✅ DELETE USER (Admin OR self)
router.delete("/:id", protect, deleteUser);


module.exports = router;