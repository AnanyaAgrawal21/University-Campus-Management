
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

// Get Dashboard Analytics
const getDashboardAnalytics = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalFaculty = await Faculty.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalEnrollments = await Enrollment.countDocuments();

    const enrollmentStats = await Enrollment.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      message: "Dashboard analytics fetched successfully",
      analytics: {
        totalStudents,
        totalFaculty,
        totalCourses,
        totalEnrollments,
        enrollmentStats
      }
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching analytics",
      error: error.message
    });
  }
};

module.exports = {
  getDashboardAnalytics
};
