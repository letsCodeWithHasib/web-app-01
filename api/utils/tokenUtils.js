import jwt from "jsonwebtoken";

// Generate access token
export const generateAccessToken = (user) => {
  // Include more user info in the payload if needed
  const payload = {
    id: user.id,
    role: user.role,
    email: user.email,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });
};

// Generate refresh token
export const generateRefreshToken = (user) => {
  const payload = {
    id: user.id,
    // You could include additional info if needed
  };

  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
};
