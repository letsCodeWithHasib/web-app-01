import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import jwt from "jsonwebtoken";

// Load environment variables
dotenv.config();

// Import routes
import userRouter from "./route/userRoute.js";
import centreAdminRouter from "./route/centerAdminRoute.js";
import testRouter from "./route/testRoute.js";

// Database connection
import connectDB from "./config/dbConfig.js";
connectDB();

// Error handler
import errorHandler from "./middleware/errorHanlder.js"; // Fixed typo in the import

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(
  cors({
    origin: "https://your-frontend.vercel.app", // Adjust to your frontend URL
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(morgan("dev")); // Optional: Use morgan for logging

// Routes
app.use("/api/auth", userRouter);
app.use("/api/centre-admin", centreAdminRouter);
app.use("/api/test", testRouter);

// Refresh token route
app.post("/refresh-token", async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Generate a new access token
    const accessToken = generateAccessToken({ id: user.id }); // Ensure this function is defined
    res.json({ accessToken });
  });
});

// 404 handler
app.use((req, res) => {
  console.log(`404 - ${req.url}`);
  res.status(404).json({ message: "404 Not Found thik" });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
