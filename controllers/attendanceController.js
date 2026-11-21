
const Attendance = require("../models/Attendance");
const Student = require("../models/Student");
const Section = require("../models/Section");

const markAttendance = async (req, res) => {
  try {
    const { student, section, date, status } = req.body;

    if (!student || !section || !date || !status) {
      return res.status(400).json({
        message: "Student, section, date and status are required"
      });
    }

    if (!["Present", "Absent", "Late"].includes(status)) {
      return res.status(400).json({
        message: "Invalid attendance status"
      });
    }

    const studentExists = await Student.findById(student);
    const sectionExists = await Section.findById(section);

    if (!studentExists || !sectionExists) {
      return res.status(404).json({
        message: "Student or section not found"
      });
    }

    const attendanceDate = new Date(date);

    if (Number.isNaN(attendanceDate.getTime())) {
      return res.status(400).json({
        message: "Invalid date"
      });
    }

    attendanceDate.setHours(0, 0, 0, 0);

    const attendance = await Attendance.findOneAndUpdate(
      {
        student,
        section,
        date: attendanceDate
      },
      {
        student,
        section,
        date: attendanceDate,
        status,
        markedBy: req.user.id
      },
      {
        new: true,
        upsert: true,
        runValidators: true
      }
    );

    res.status(200).json({
      message: "Attendance marked successfully",
      attendance
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getAttendance = async (req, res) => {
  try {
    const { student, section } = req.query;

    const filter = {};

    if (student) filter.student = student;
    if (section) filter.section = section;

    const records = await Attendance.find(filter)
      .populate("student", "name enrollmentNumber")
      .populate("section", "sectionName")
      .sort({ date: -1 });

    res.status(200).json({
      count: records.length,
      attendance: records
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const getAttendancePercentage = async (req, res) => {
  try {
    const { student, section } = req.query;

    if (!student || !section) {
      return res.status(400).json({
        message: "Student and section are required"
      });
    }

    const records = await Attendance.find({ student, section });

    const total = records.length;

    const present = records.filter(
      record => record.status === "Present" || record.status === "Late"
    ).length;

    const percentage = total === 0
      ? 0
      : Number(((present / total) * 100).toFixed(2));

    res.status(200).json({
      student,
      section,
      totalClasses: total,
      attendedClasses: present,
      attendancePercentage: percentage
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  markAttendance,
  getAttendance,
  getAttendancePercentage
};
