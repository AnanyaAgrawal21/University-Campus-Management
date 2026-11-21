
const express = require("express");
const router = express.Router();

const { sectionController } = require("../controllers/academicController");

router.post("/", sectionController.create);
router.get("/", sectionController.getAll);
router.get("/:id", sectionController.getById);
router.put("/:id", sectionController.update);
router.delete("/:id", sectionController.delete);

module.exports = router;
