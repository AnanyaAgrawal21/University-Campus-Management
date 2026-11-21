
const express = require("express");
const router = express.Router();

const {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement
} = require("../controllers/announcementController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Admin and Faculty can create announcements
router.post(
  "/",
  protect,
  authorizeRoles("Admin", "Faculty"),
  createAnnouncement
);

// Logged-in users can view announcements
router.get(
  "/",
  protect,
  getAnnouncements
);

// Only Admin can delete announcements
router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  deleteAnnouncement
);

module.exports = router;
