const express = require("express");
const router = express.Router();

const { analyzeProfile } = require("../controllers/leetcodeController");

router.get("/analyze", analyzeProfile);

module.exports = router;