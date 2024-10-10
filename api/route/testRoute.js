import { Router } from "express";
import { createTest } from "../controller/testController.js";
import verifyToken from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";

const testRouter = Router();

testRouter.route("/").post(verifyToken, authorize("centerAdmin"), createTest);

export default testRouter;
