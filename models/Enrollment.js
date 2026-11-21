
const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true
    },
    enrollmentDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Enrolled", "Completed", "Dropped"],
      default: "Enrolled"
    }
  },
  { timestamps: true }
);

enrollmentSchema.index(
  { student: 1, section: 1 },
  { unique: true }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);
