import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
//configure env
dotenv.config();
//database config
connectDB();

const app = express();
//middleware
app.use(express.json());
app.use(morgan("dev"));

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcom to e-comm app",
  });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `server runnning on${process.env.DEV_MODE} mode ${PORT}`.bgGreen.blue
  );
});
