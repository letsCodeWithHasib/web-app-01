import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

// routes
import userRouter from "./route/userRoute.js";

// db config
import connectDB from "./config/dbConfig.js";
connectDB();

// error handler
import errorHandler from "./middleware/errorHanlder.js";

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use("/v1/auth/user", userRouter);

app.post("/refresh-token", (req, res, next) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden

    // Generate a new access token
    const accessToken = generateAccessToken(user.id);
    res.json({ accessToken });
  });
});

//handling erros
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server started");
});
