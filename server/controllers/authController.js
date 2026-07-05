const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {

    try {

        const { fullName, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists."
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",

            user: {
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email
            }

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
});

    }    

};

const login = async (req, res) => {

    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }
        const isPasswordMatch = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials."
            });
        }

        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.status(200).json({
            success: true,
            message: "User logged in successfully.",  
            token,
            user: {
                id: existingUser._id,
                fullName: existingUser.fullName,
                email: existingUser.email
            }
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    signup,
    login
};