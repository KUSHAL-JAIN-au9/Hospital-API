import jwt from "jsonwebtoken";
import Doctor from "../models/doctorSchema.js";

// Format of token
//Authorizaiton : Bearer <access_token>

//verify token
export const verifyToken = async (req, res, next) => {
  console.log("Bearer Token" + req.headers["authorization"]);
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("TOKEN : " + token);
    req.token = token;
  }

  if (!token) {
    console.log("Token Error");
    return res.status(401).json({
      success: false,
      message: "Unauthroized access",
    });
  }

  try {
    const decoded = await jwt.verify(token, "secret");
    console.log("DECODED TOKEN : " + decoded);

    req.doctor = await Doctor.findById(decoded.id);
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      success: false,
      message: "Unauthroized access",
    });
  }
};
