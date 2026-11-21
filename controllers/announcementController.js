
const Announcement = require("../models/Announcement");
const campusEvents = require("../utils/eventEmitter");

// Create Announcement
const createAnnouncement = async (req, res) => {
  try {
    const { title, message, targetRole } = req.body;

    const announcement = await Announcement.create({
      title,
      message,
      targetRole: targetRole || "All",
      createdBy: req.user.id
    });

    // EventEmitter event
    campusEvents.emit("announcementCreated", announcement);

    // Socket.IO real-time event
    const io = req.app.get("io");

    if (io) {
      io.emit("newAnnouncement", announcement);
    }

    res.status(201).json({
      message: "Announcement created successfully",
      announcement
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating announcement",
      error: error.message
    });
  }
};

// Get Announcements
const getAnnouncements = async (req, res) => {
  try {
    const userRole = req.user.role;

    const announcements = await Announcement.find({
      $or: [
        { targetRole: "All" },
        { targetRole: userRole }
      ]
    }).populate("createdBy", "name email");

    res.status(200).json({
      message: "Announcements fetched successfully",
      announcements
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching announcements",
      error: error.message
    });
  }
};

// Delete Announcement
const deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(
      req.params.id
    );

    if (!announcement) {
      return res.status(404).json({
        message: "Announcement not found"
      });
    }

    res.status(200).json({
      message: "Announcement deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting announcement",
      error: error.message
    });
  }
};

module.exports = {
  createAnnouncement,
  getAnnouncements,
  deleteAnnouncement
};
