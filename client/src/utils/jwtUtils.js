// src/utils/jwtUtils.js
import { jwtDecode } from "jwt-decode";

/**
 * Get user role from JWT
 * @param {string} token - The JWT token
 * @returns {string|null} - The role of the user or null if not found
 */
export const getUserRoleFromToken = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.role || null; // Adjust this based on your token's structure
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
