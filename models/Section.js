
const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
  {
    sectionName: { type: String, required: true, trim: true },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
      required: true
    },
    semester: { type: Number, required: true, min: 1, max: 8 },
    academicYear: { type: String, required: true },
    capacity: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

sectionSchema.index(
  { course: 1, sectionName: 1, semester: 1, academicYear: 1 },
  { unique: true }
);

module.exports = mongoose.model("Section", sectionSchema);
