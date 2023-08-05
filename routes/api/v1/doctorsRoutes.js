import express from "express";
import {
  doctorLogin,
  doctorRegister,
} from "../../../controllers/api/v1/doctorController.js";

const router = express.Router();

router.post("/register", doctorRegister);
router.post("/login", doctorLogin);

export default router;
