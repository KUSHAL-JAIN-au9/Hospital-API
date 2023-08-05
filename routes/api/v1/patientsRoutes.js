import express from "express";
import { patientRegister } from "../../../controllers/api/v1/patientController.js";
import {
  reportAllReports,
  reportCreateReport,
} from "../../../controllers/api/v1/reportController.js";
import { verifyToken } from "../../../config/middleware.js";

const router = express.Router();

router.post("/register", verifyToken, patientRegister);

//- /patients/:id/create_report
router.post("/:id/create_report", verifyToken, reportCreateReport);
router.get("/:id/all_reports", reportAllReports);

export default router;
