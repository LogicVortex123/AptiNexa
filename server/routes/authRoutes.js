const express = require("express");

const router = express.Router();

const { signup, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }
        res.status(200).json({
            success: true,
            message: "Protected Route Accessed Successfully",
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                leetcodeUsername: user.leetcodeUsername,
                readinessScore: user.readinessScore
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;