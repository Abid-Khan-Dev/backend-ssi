import express from "express";
import { enroll } from "../controllers/enrollment.controller.js";

const router = express.Router();

router.post("/", enroll);

export default router;
