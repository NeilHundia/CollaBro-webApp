const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/posts", require("./routes/PostRoutes"));
app.use("/api/communities", require("./routes/communityRoutes"));
app.use("/api/recommendations", require("./routes/recommendationRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/notifications", require("./routes/notificationRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/plans", require("./routes/planRouts"));
app.use("/api/subscriptions", require("./routes/subscriptionRoutes"));

// Default route
app.get("/test", (req, res) => {
  res.json({ message: "Server is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Received SIGINT. Shutting down gracefully...");
  try {
    await mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
    server.close(() => {
      console.log("✅ Express server closed");
      process.exit(0);
    });
  } catch (err) {
    console.error("❌ Error during shutdown:", err.message);
    process.exit(1);
  }
});

process.on("SIGTERM", async () => {
  console.log("Received SIGTERM. Shutting down gracefully...");
  try {
    await mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
    server.close(() => {
      console.log("✅ Express server closed");
      process.exit(0);
    });
  } catch (err) {
    console.error("❌ Error during shutdown:", err.message);
    process.exit(1);
  }
});