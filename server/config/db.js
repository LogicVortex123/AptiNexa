const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB initial connection failed:", error.message);
        // Do NOT call process.exit(1) to keep the server running and allow Mongoose to auto-reconnect
    }
};

// Monitor connection events
mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
    console.warn("Mongoose disconnected from DB. Retrying to connect...");
});

module.exports = connectDB;
