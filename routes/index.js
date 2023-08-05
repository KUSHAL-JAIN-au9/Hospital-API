import express from "express";
import routes from "./api/index.js";

const router = express.Router();

router.use("/api", routes);

export default router;
