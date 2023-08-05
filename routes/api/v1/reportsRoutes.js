import express from "express";
import { verifyToken } from "../../../config/middleware.js";
import {
  ReportrtByStatus,
  reportCreateReport,
} from "../../../controllers/api/v1/reportController.js";

const router = express.Router();

router.post("/:id/create_report", verifyToken, reportCreateReport);

router.get("/:status", ReportrtByStatus);

export default router;
