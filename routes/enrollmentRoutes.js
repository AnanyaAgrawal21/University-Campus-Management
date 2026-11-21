
const express = require("express");
const router = express.Router();

const {
  enrollmentController
} = require("../controllers/academicController");

router.post("/", enrollmentController.createEnrollment);
router.get("/", enrollmentController.getAll);
router.get("/:id", enrollmentController.getById);
router.put("/:id", enrollmentController.update);
router.delete("/:id", enrollmentController.delete);

module.exports = router;
