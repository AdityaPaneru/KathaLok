const express = require("express");

const router = express.Router();

const {
  getStories,
  getStory,
  createStory,
  deleteStory,
} = require("../controllers/storyController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
router.post("/", auth, admin, createStory);
router.delete("/:id", auth, admin, deleteStory);

router.get("/", getStories);
router.get("/:id", getStory);

module.exports = router;
