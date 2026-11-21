
const Course = require("../models/Course");
const Section = require("../models/Section");
const Enrollment = require("../models/Enrollment");
const Student = require("../models/Student");
const Faculty = require("../models/Faculty");

// Generic CRUD controller
const createCrud = (Model) => ({
  create: async (req, res) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const items = await Model.find().sort({ createdAt: -1 });
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const item = await Model.findById(req.params.id);

      if (!item) {
        return res.status(404).json({ message: "Record not found" });
      }

      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ message: "Invalid ID" });
    }
  },

  update: async (req, res) => {
    try {
      const item = await Model.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );

      if (!item) {
        return res.status(404).json({ message: "Record not found" });
      }

      res.status(200).json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const item = await Model.findByIdAndDelete(req.params.id);

      if (!item) {
        return res.status(404).json({ message: "Record not found" });
      }

      res.status(200).json({ message: "Record deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Invalid ID" });
    }
  }
});

// Course CRUD
const courseController = createCrud(Course);

// Section CRUD
const sectionController = createCrud(Section);

// Enrollment CRUD
const enrollmentController = createCrud(Enrollment);

// Enroll student in a section
enrollmentController.createEnrollment = async (req, res) => {
  try {
    const { student, course, section } = req.body;

    const studentExists = await Student.findById(student);
    const courseExists = await Course.findById(course);
    const sectionExists = await Section.findById(section);

    if (!studentExists) {
      return res.status(404).json({ message: "Student not found" });
    }

    if (!courseExists) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (!sectionExists) {
      return res.status(404).json({ message: "Section not found" });
    }

    if (sectionExists.course.toString() !== course) {
      return res.status(400).json({
        message: "Section does not belong to this course"
      });
    }

    const count = await Enrollment.countDocuments({
      section,
      status: "Enrolled"
    });

    if (count >= sectionExists.capacity) {
      return res.status(400).json({ message: "Section is full" });
    }

    const enrollment = await Enrollment.create({
      student,
      course,
      section
    });

    res.status(201).json(enrollment);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Student is already enrolled in this section"
      });
    }

    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  courseController,
  sectionController,
  enrollmentController
};
