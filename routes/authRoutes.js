
const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Protected profile - any logged-in user
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed successfully",
    user: req.user
  });
});

// Admin-only route
router.get(
  "/admin-test",
  protect,
  authorizeRoles("Admin"),
  (req, res) => {
    res.status(200).json({
      message: "Admin access granted"
    });
  }
);

// Faculty-only route
router.get(
  "/faculty-test",
  protect,
  authorizeRoles("Faculty"),
  (req, res) => {
    res.status(200).json({
      message: "Faculty access granted"
    });
  }
);

// Student-only route
router.get(
  "/student-test",
  protect,
  authorizeRoles("Student"),
  (req, res) => {
    res.status(200).json({
      message: "Student access granted"
    });
  }
);

module.exports = router;
