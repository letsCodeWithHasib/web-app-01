import { Router } from "express";
import verifyToken from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";

const centerAdminRouter = Router();

centerAdminRouter.get(
  "/dashboard",
  verifyToken,
  authorize("centerAdmin"),
  (req, res) => {
    console.log("chala");
    res.send("Thk hai admin");
  }
);

export default centerAdminRouter;
