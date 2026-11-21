
const express = require("express");
const router = express.Router();

const {
  addFaculty,
  getFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty
} = require("../controllers/facultyController");

// Create Faculty
router.post("/", addFaculty);

// Get All Faculty
router.get("/", getFaculty);

// Get Faculty By ID
router.get("/:id", getFacultyById);

// Update Faculty
router.put("/:id", updateFaculty);

// Delete Faculty
router.delete("/:id", deleteFaculty);

module.exports = router;
