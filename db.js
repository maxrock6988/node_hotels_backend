const mongoose = require("mongoose");

// Define MongoDB connection URL
const mongoURL = "mongodb://127.0.0.1:27017/hotels";

// Connect to MongoDB
mongoose.connect(mongoURL)

// Get default connection
const db = mongoose.connection;

// Event listeners
db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

// Export connection
module.exports = db;