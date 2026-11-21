
const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getAttendance,
  getAttendancePercentage
} = require("../controllers/attendanceController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Faculty and Admin can mark attendance
router.post(
  "/",
  protect,
  authorizeRoles("Faculty", "Admin"),
  markAttendance
);

// Authenticated users can view attendance records
router.get(
  "/",
  protect,
  getAttendance
);

// Authenticated users can check attendance percentage
router.get(
  "/percentage",
  protect,
  getAttendancePercentage
);

module.exports = router;
