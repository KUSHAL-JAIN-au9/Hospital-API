import express from "express";
import doctorRoutes from "./doctorsRoutes.js";
import patientRoutes from "./patientsRoutes.js";
import reportRoutes from "./reportsRoutes.js";

const router = express.Router();

router.use("/doctors", doctorRoutes);
router.use("/patients", patientRoutes);
router.use("/reports", reportRoutes);

export default router;
