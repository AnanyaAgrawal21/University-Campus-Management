
const express = require("express");
const router = express.Router();

const { getDashboardAnalytics } = require("../controllers/analyticsController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Dashboard Analytics - Admin only
router.get(
  "/",
  protect,
  authorizeRoles("Admin"),
  getDashboardAnalytics
);

module.exports = router;
