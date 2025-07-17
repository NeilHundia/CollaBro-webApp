// app.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { connectPrisma } = require("./config/prisma");

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Connect to Supabase (Prisma)
connectPrisma();

// Middleware
app.use(cors());
app.use(express.json());

// SQL routes
app.use("/api/users", require("./routes/sql/userRoutes"));
app.use("/api/communities", require("./routes/sql/communityRoutes"));
app.use("/api/plans", require("./routes/sql/planRoutes"));
app.use("/api/subscriptions", require("./routes/sql/subscriptionRoutes"));

// NoSQL routes
app.use("/api/posts", require("./routes/nosql/PostRoutes"));
app.use("/api/recommendations", require("./routes/nosql/recommendationRoutes"));
app.use("/api/applications", require("./routes/nosql/applicationRoutes"));
app.use("/api/notifications", require("./routes/nosql/notificationRoutes"));
app.use("/api/projects", require("./routes/nosql/projectRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

