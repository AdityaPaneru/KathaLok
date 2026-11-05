const express = require("express");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const { generateStory } = require("../controllers/aiController");

const router = express.Router();

router.post("/generate-story", auth, admin, generateStory);

module.exports = router;
