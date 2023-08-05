import express from "express";
import routes from "./v1/index.js";

const router = express.Router();

router.use("/v1", routes);

export default router;
