import express from "express";
import dotenv from "dotenv";
import db from "./config/mongoose.js";
import passport from "passport";

dotenv.config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

// Define routes and middleware

console.log(process.env.SECRET);

// Parse application/json
app.use(express.json());

// express router
// app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, (err) => {
  if (err) {
    console.log(`server not running `, err);
  }
  console.log(`Server listening on port ${port}`);
});
