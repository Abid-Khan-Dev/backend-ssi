import express from "express";

const router = express.Router();

// Define routes here
import enrollmentRoutes from "./enrollment.routes.js";
import contactRoutes from "./contact.routes.js";

// Use the imported routes
router.use("/enroll", enrollmentRoutes);
router.use("/contact", contactRoutes);

export default router;
