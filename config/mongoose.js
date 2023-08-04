import mongoose from "mongoose";
// mongoose.set('strictQuery',true);
import dotenv from "dotenv";

dotenv.config();
const DB = process.env.MONGO_URI;
// "mongodb+srv://kushal313:9632@cluster0.pyhoisp.mongodb.net/placementcell?retryWrites=true&w=majority";

console.log(process.env.PORT);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: Mongodb Kushal");
});

export default db;
